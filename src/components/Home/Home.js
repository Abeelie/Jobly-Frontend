import React from "react";
import Box from '@mui/material/Box';
import "./home.css";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import HomeImg from "../../images/home.png";

const Home = () => {
    const history = useHistory();
    return (
      <div align="center">
        <Box className="hero-section">
            <Grid container spacing={1}>
                <Grid xs={12} sm={12} md={6} item className="right">
                    <Box>
                        <div className="text-welcome">
                            <p className="title" style={{fontSize: "4rem"}}>Welcome to Jobly</p>
                            <p className="subtitle" style={{fontSize: "2rem"}}>Where we help you find a job</p>
                        </div>
                        <div className="btn">
                            <Button variant="outlined"
                                    fullWidth
                                    color="secondary"
                                    onClick={() => history.push("/login")}
                                    style={{width: "200px", margin: "0 auto"}}
                                >Get Started
                            </Button>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} item className="left">
                    <Box>
                        <img className="hero-image"
                             src={HomeImg} 
                             alt="image"
                             width="100%"
                             height="400px"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
}


export default Home