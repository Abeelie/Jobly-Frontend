import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../helpers/UserContext";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./jobcard.css";


const JobCard = (props) => {
  const { appliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(appliedToJob(props.id));
  }, [props.id, appliedToJob]);

  const handleApply = async () => {
    if (appliedToJob(props.id)) return;
    applyToJob(props.id);
    setApplied(true);
  }

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
                <Grid xs={12} item>
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleApply}
                        disabled={applied}
                        style={{
                            backgroundColor: applied ? "red" : "#6f00ff",
                            color: "white",
                            float: "right"
                        }}
                        >{applied ? "Applied" : "Apply"}
                    </Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default JobCard