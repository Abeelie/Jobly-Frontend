import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import CompanyList from "../components/CompanyList/CompanyList";
import CompanyDetail from "../components/CompanyDetail/CompanyDetail";
import JobsList from "../components/JobsList/JobsList";
import JobCard from "../components/JobCard/JobCard";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Profile from "../components/Profile/Profile";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFoundPage from "../components/404/NotFoundPage";
import Footer from "../components/Footer/Footer";
import LoggedInHome from "../components/LoggedInHome/LoggedInHome";
import Applied from "../components/Applied/Applied";

const Router = ({ logout, login, signup }) => {
  return (
    <div>
      <NavBar logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <ProtectedRoute exact path="/welcome">
          <LoggedInHome />
        </ProtectedRoute>
        <ProtectedRoute exact path="/applied-jobs">
          <Applied />
        </ProtectedRoute>
        <Route exact path="/sign-up">
          <Signup signup={signup} />
        </Route>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute exact path="/jobs/:job">
          <JobCard />
        </ProtectedRoute> 
        <ProtectedRoute exact path="/jobs">
          <JobsList />
        </ProtectedRoute>
        <ProtectedRoute exact path="/companies/:handle">
          <CompanyDetail />
        </ProtectedRoute>
        <ProtectedRoute exact path="/companies">
          <CompanyList />
        </ProtectedRoute>
         <Route exact path="/404" >
           <NotFoundPage />
         </Route>
        <Redirect to="/404"/>
      </Switch>
      <Footer />
    </div>
  );
}

export default Router;