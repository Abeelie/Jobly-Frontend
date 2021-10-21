import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import "./companycard.css";

const CompanyCard = (props) => {
  return (
    <Link to={`/companies/${props.handle}`} style={{textDecoration: "none"}}>
        <Card style={{width: "80%", margin: "0 auto"}} className="company-link">
            <CardContent>
                <Grid>
                    <Typography variant="h4">
                        {props.name}
                    </Typography>
                    <Typography variant="h5">
                        Handle: {props.handle}
                    </Typography>
                    <Typography variant="p">
                        <small>Description: {props.description}</small>
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    </Link>
  );
}

export default CompanyCard;