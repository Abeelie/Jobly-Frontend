import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import "./searchbar.css";

const SearchBars = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchFor(name.trim() || undefined);
    setName(name.trim());
  }

  return (
    <div align="center">
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={props.placeholder}
            className="searchs"
          />
          <Button 
            variant="outlined"
            color="secondary"
            type="submit"
            style={{height: "55px"}}
            >Search
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default SearchBars;