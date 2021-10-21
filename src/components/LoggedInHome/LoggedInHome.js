import React, {useContext} from "react";
import UserContext from "../../helpers/UserContext";
import Box from '@mui/material/Box';
import LoggedInImg from "../../images/loggedIn.png";

const LoggedInHome = () => {
    const { user } = useContext(UserContext);

    return (
        <div align="center" style={{marginTop: "100px", marginBottom: "300px"}}>
            <Box>
                <div aligin="center">
                    <img src={LoggedInImg} 
                    alt="404" 
                    width="40%" 
                    height="40%"
                    />
                    <p style={{fontSize: "30px", color: "#6f00ff"}}>
                        Welcome Back {user.username}
                    </p>
                </div>
            </Box>
        </div>
    )

}

export default LoggedInHome