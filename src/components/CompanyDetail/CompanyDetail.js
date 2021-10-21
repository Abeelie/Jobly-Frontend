import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "../../helpers/api";
import Loader from "../Loader/Loader";
import JobCardList from "../JobsCardList/JobsCardList";
import swal from "sweetalert";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      try {
        const res = await JoblyApi.getCompany(handle)
        setCompany(res)
      }catch(error){
        swal({title: error, icon:"error"})
      }
    }
    getCompany()
    },
    [handle]
  );

    if (!company) return <Loader />
    

  return (
    <div style={{marginTop: "50px"}}>
      <h1 style={{textAlign: "center"}}>{company.name}</h1>
      <p style={{textAlign: "center"}}>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail