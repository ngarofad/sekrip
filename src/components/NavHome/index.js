import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'

const useStyle = makeStyles((theme) => ({

    papa: {
        flexGrow: 2,
    },

}))

const NavHome = () => {

    const classes = useStyle();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <box className={classes.papa}>
                    <img src={logoMoniqq} alt="logoMoniqq" />
                </box>
                {/* <Link to="/login">
                  <Button variant="contained" color="primary">Login</Button>
                </Link> */}
                <Button variant="contained" color="primary" to={'/login'} component={Link}>
                    Login ISP
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavHome
