import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@material-ui/core';
import Sidenav from './sidenav'


const div1 = { margin: "15px", padding: "15px 25px 15px 25px", background: "white", minheight: "70vh", marginleft: "20px", marginright: "20px", borderradius: "5px" }


export default function SimpleContainer() {
    return (
        <Sidenav>
        <div style={div1}>
            <h3 style={{ fontWeight: "bold" }}>My Account</h3>

            <br />

            <br />

            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <AccountCircleIcon style={{ fontSize: 150 }} />
                </Grid>
                <Grid item style={{ marginLeft: '100px' }}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item style={{ fontWeight: "bold" }}>Email</Grid>
                        <p>Qwerty Uiop</p>
                        <Grid item style={{ fontWeight: "bold" }}>Admin</Grid>
                        <p>Qwerty Uiop@gmail.com</p>
                        <Grid item style={{ fontWeight: "bold" }}>Role</Grid>
                        <p>User</p>
                    </Grid>
                </Grid>
            </Grid>

        </div>
        </Sidenav>
    );
}