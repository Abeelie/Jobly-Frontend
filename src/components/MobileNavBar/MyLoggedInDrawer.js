import React from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router";

const MyLoggedInDrawer = (props) => {
    const history = useHistory();
    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={props.open}
                onClose={props.handleDrawerClose}
                onOpen={props.handleDrawerOpen}>
                <div  
                    onClick={props.handleDrawerClose}
                    onKeyPress={props.handleDrawerClose}
                    role="button"
                    tabIndex={0}
                >
                <IconButton><ChevronRightIcon /></IconButton>
                </div>
                <div>
                    <Box textAlign="center" p={2} style={{width: 200}}>
                        Jobly Menu
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => history.push("/companies")}>
                            <ListItemText primary={"Companies"}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => history.push("/jobs")}>
                            <ListItemText primary={"Jobs"}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => history.push("/profile")}>
                            <ListItemText primary={"Profile"}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => history.push("/applied-jobs")}>
                            <ListItemText primary={"Applied Jobs"}></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => {
                            props.logout()
                            history.push("/login")
                        }}>
                            <ListItemText primary={"Logout"}></ListItemText>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>  
        </div>
    )
}


export default MyLoggedInDrawer


