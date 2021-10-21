import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "../JobCard/jobcard.css";

const AppliedCard = (props) => {

return (
    <Card style={{width: "80%", margin: "0 auto"}} className="job-card">
        <CardContent>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="p">{props.companyName}</Typography>
                    {props.salary && (
                        <Typography variant="p">
                            &nbsp; Salary: <small>{props.salary}</small>
                        </Typography>
                    )}
                    {props.equity && (
                        <Typography variant="p">
                            &nbsp; Equity: <small>{props.equity}</small>
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default AppliedCard