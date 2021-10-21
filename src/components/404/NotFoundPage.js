import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useHistory } from "react-router"; 
import Img404 from "../../images/404Img.png";

const NotFoundPage = () => {
    const history = useHistory();
    return (
        <Box>
            <div align="center" style={{marginTop: "40px"}}>
                <img src={Img404} 
                     alt="404" 
                     width="40%" 
                     height="40%"
                />
                <h1 style={{fontSize: "50px"}}>404</h1>
                <h4 style={{fontSize: "30px"}}>
                    The page requested does not exist
                </h4>
                <Button variant="contained" 
                        color="primary" 
                        onClick={() => history.push("/")}
                        style={{backgroundColor: "orange"}}>
                        Go Back!
                </Button>
            </div>
        </Box>
    )
}

export default NotFoundPage