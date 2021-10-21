import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import jwt from "jsonwebtoken";
import {JoblyApi} from "./helpers/api";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./helpers/UserContext";
import Loader from "./components/Loader/Loader";
import swal from "sweetalert";

export const LOCAL_STORAGE_TOKEN_ID = "jobly-user-logged-in";

const App = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_TOKEN_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          const { username } = jwt.decode(token);
          JoblyApi.token = token;
          const res = await JoblyApi.getCurrentUser(username);
          setUser(res);
          setApplicationIds(new Set(res.applications));
        } catch (error) {
          console.error(error);
          setUser(null);
        }
      }
      setUserInfo(true);
    }
    setUserInfo(false);
    getUser();
  }, [token]);

  const logout = () => {
    setUser(null);
    setToken(null);
  }

  const signup = async (data) => {
    try {
      const token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error(e);
      return { success: false, e };
    }
  }

  const login = async (data) => {
    try {
      const token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error(e);
      return { success: false, e };
    }
  }

  const appliedToJob = (id) => {
    return applicationIds.has(id);
  }

  const applyToJob = async (id) => {
    if (appliedToJob(id)) return;
    try {
      await JoblyApi.applyToJob(user.username, id);
      setApplicationIds(new Set([...applicationIds, id]));
    }catch(error){
      swal({title: "already applied", icon: "error"}) 
    }
  }

  if (!userInfo) return <Loader />


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, appliedToJob, applyToJob }}>
        <div className="App">
          <Router logout={logout} login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;