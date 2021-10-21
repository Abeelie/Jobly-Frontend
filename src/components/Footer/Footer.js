import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Link from '@mui/material/Link';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Box style={{backgroundColor:"#6f00ff", color: "white", marginTop: "200px"}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1}>Quick Links</Box>
                            <Box>
                                <Link href="/" color="inherit" underline="hover">
                                    Home
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/sign-up" color="inherit" underline="hover">
                                    Signup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/login" color="inherit" underline="hover">
                                    Login
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1}>Services</Box>
                            <Box>
                                <Link color="inherit" underline="none">
                                    Apply to jobs
                                </Link>
                            </Box>
                            <Box>
                                <Link color="inherit" underline="none">
                                    Search for jobs
                                </Link>
                            </Box>
                            <Box>
                                <Link color="inherit" underline="none">
                                    Profile
                                </Link>
                            </Box>
                        </Grid>   
                    </Grid>
                    <p style={{textAlign: "center", margin: "0", lineHeight: "50px"}}>&copy; Jobly</p>
                    <p style={{textAlign: "center", margin: "0", lineHeight: "50px"}}>Developed by Abraham Elie</p>
                </Container>
            </Box>
        </footer>
    )
}


export default Footer