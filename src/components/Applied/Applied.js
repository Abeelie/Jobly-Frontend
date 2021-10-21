import React, {useContext, useEffect, useState} from "react";
import AppliedCard from "../AppliedCard/AppliedCard";
import { v4 as uuid } from "uuid";
import UserContext from "../../helpers/UserContext";
import { JoblyApi } from "../../helpers/api";
import swal from "sweetalert";


const Applied = () => {
  const { user } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);

  const getID = async (id) => {
    try {
      const res = await JoblyApi.getJobByID(id);
      setJobs(v => [...v, res])
    } catch (error) {
      swal({title: error, icon: "error"})
    }
  }

  useEffect(() => {
    user.applications.map(id => {
      getID(id)
    })
  },[])

  if(jobs.length === 0){ 
    return ( 
    <div align="center" style={{marginBottom: "700px"}}>
      <h1>You have not applied to any jobs</h1>
    </div>
    )
  }

  return (
    <div style={{marginTop: "50px", marginBottom: "400px"}}>
      <div align="center">
        <h1>Applied Jobs</h1>
      </div>
      {jobs.length ? (
        <div>
        {jobs.map(job => (
          <div style={{marginTop: "20px"}} key={uuid()}>
            <AppliedCard
              key={uuid()}
              id={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
              companyName={job.companyName}
            />
          </div>
        ))}
        </div>
      ):(
        <div style={{marginTop: "20px"}} key={uuid()}>
            <AppliedCard
              key={uuid()}
              id={jobs.id}
              title={jobs.title}
              salary={jobs.salary}
              equity={jobs.equity}
              companyName={jobs.companyName}
            />
        </div>
      )}
    </div>
  );
}

export default Applied