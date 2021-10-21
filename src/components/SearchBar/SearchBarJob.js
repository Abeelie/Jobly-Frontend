import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import "./searchbarjob.css";

const SearchBarJob = (props) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [equity, setEquity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchFor(name.trim(), salary.trim(), equity.trim());
    setName(name.trim());
    setSalary(salary.trim());
    setEquity(equity.trim());
  }

  return (
    <div align="center">
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by Job Title"
            className="search"
          />
          <TextField 
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Search by Salary"
            className="search"
          />
          <TextField 
            value={equity}
            onChange={(e) => setEquity(e.target.value)}
            placeholder="Search by Equity"
            className="search"
          />
          <Button 
            variant="outlined"
            color="secondary"
            type="submit"
            fullWidth
            style={{width: "80%"}}
            >Search
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default SearchBarJob;