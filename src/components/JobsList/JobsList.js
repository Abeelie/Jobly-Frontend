import React, { useState, useEffect } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import {JoblyApi} from "../../helpers/api";
import Loader from "../Loader/Loader";
import JobCardList from "../JobsCardList/JobsCardList";
import swal from "sweetalert";
import SearchBarJob from "../SearchBar/SearchBarJob";

const JobsList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    search()
  }, []);

  const search = async (title, salary, equity) => {
    try {
      // const res = await JoblyApi.getJobs(title);
      // setJobs(res);
      const res = await JoblyApi.getTitleSalaryEquity(title, salary, equity);
      setJobs(res)
    }catch(error){
      swal({title: "Form Empty, Fill in at least one input", icon: "error"})
    }
  }

  if (!jobs) return <Loader />;
    

  return (
    <div style={{marginTop: "50px"}}>
      {/* <SearchBar searchFor={search} placeholder={"Search company by job title"}/> */}
      <SearchBarJob searchFor={search} />
      {jobs.length ? 
        <JobCardList jobs={jobs} />  
      : <div align="center">
          <p style={{fontSize: "50px", marginBottom: "400px"}}>
            No results found
          </p>
        </div>}
    </div>
  );
}

export default JobsList;