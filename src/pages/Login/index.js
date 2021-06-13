import React from 'react';
import { Box, Typography, Button, TextField, CssBaseline, Grid, makeStyles, Paper } from '@material-ui/core';
import { logoMoniqq } from '../../assets'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(10),
        textAlign: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}))

const Login = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <main>
                <Box bgcolor="paper" width="100vw" height="100vh">
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Box className={classes.root} p={{ xs: 2, md: 10 }}>
                            <Grid container item justify="center" alignItems="center">
                                <Grid item lg={4} md={6} sm={8} xs={12} >
                                    <Paper className={classes.paper}>
                                        <Box p={7}>
                                            <Box mb={3}>
                                                <img src={logoMoniqq} alt="logoMoniqq" />
                                            </Box>
                                            <Typography component="h1" color="textPrimary" variant="h5" gutterBottom>
                                                <b>
                                                    Sign in
                                            </b>
                                            </Typography>
                                            <form className={classes.form} noValidate>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="username"
                                                    label="Username"
                                                    name="username"
                                                    autoComplete="username"
                                                    autoFocus
                                                />
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                />

                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Sign In
                                            </Button>
                                            </form>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </main>
        </>
    );
};

export default Login;
