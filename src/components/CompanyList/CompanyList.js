import React, { useState, useEffect } from "react";
import { JoblyApi } from "../../helpers/api";
import Loader from "../Loader/Loader";
import CompanyCard from "../CompanyCard/CompanyCard";
import SearchBar from "../SearchBar/SearchBar";
import { v4 as uuid } from "uuid";
import swal from "sweetalert";

const CompanyList = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await JoblyApi.getCompanies();
        setCompanies(res);
      }catch(error){
        swal({title: error, icon: "error"})
      }
    }
      getCompanies();
  }, []);

  const search = async (name) => {
    try {
      const res = await JoblyApi.getCompany(name);
      setCompanies(res);
    }catch(error){
      swal({title: error, icon: "error"})
    }
  }

  if (!companies) return <Loader />;
    
  return (
    <div style={{marginTop: "50px"}}>
      <SearchBar searchFor={search} placeholder={"Search company by handle"}/>
       {companies.length ? (
        <div>
          {companies.map(company => (
            <div style={{marginTop: "20px"}} key={uuid()}>
              <CompanyCard
                key={uuid()}
                handle={company.handle}
                name={company.name}
                description={company.description}
              />
            </div>
          ))}
        </div>
       ) : ( 
        <div style={{marginTop: "20px", marginBottom: "500px"}} key={uuid()}>
          <CompanyCard
            key={uuid()}
            handle={companies.handle}
            name={companies.name}
            description={companies.description}
          />
        </div>
       )}
    </div>
  );
}

export default CompanyList;