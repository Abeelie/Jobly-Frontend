import React from "react";
import JobCard from "../JobCard/JobCard";
import { v4 as uuid } from "uuid";

const JobCardList = (props) => {
  return (
    <div style={{marginTop: "50px"}}>
      {props.jobs.map((job) => (
        <div style={{marginTop: "20px"}} key={uuid()}>
          <JobCard
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
  );
}

export default JobCardList