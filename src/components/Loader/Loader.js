import React from 'react';
import Box from '@mui/material/Box';
import LoaderImg from "../../images/loader.png";

const Loader = () => {
  return (
    <div style={{marginTop: "100px"}}>
      <Box>
        <div align="center">
          <img src={LoaderImg} 
               alt="404" 
               width="40%" 
               height="40%"
          />
          <p style={{fontSize: "50px", color: "#6f00ff"}}>
            Loading..................
          </p>
        </div>
      </Box>
    </div>
  );
}


export default Loader