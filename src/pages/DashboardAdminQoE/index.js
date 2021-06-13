import React from 'react'
import clsx from 'clsx';
import { makeStyles, CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { Footer, Chart, Deposits, Orders, mainListItemsDashAdmin, secondaryListItemsDashAdmin } from '../../components';
import { ListAlt, SentimentSatisfiedAlt, SentimentVeryDissatisfied, Twitter, } from '@material-ui/icons';



const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 170,
    },
    fixedHeightChart: {
        height: 360,
    }
}));



const DashboardAdminQoE = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItemsDashAdmin}</List>
                <Divider />
                <List>{secondaryListItemsDashAdmin}</List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    {/* {QOE} */}
                    {/* asolo */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <Twitter fontSize="large" style={{ color: "skyblue" }} />
                                                </Box>
                                                {/* <Box bgcolor="skyblue" borderRadius={4} display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <Twitter fontSize="large" style={{ color: "white" }} />
                                                </Box> */}
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Total Tweet</Typography>
                                            <Typography component="p" variant="h4">
                                                128
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <SentimentSatisfiedAlt fontSize="large" style={{ color: "green" }} />
                                                </Box>
                                                {/* <Box bgcolor="green" borderRadius={4} display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <SentimentSatisfiedAlt fontSize="large" style={{ color: "white" }} />
                                                </Box> */}
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Sentimen Positif</Typography>
                                            <Typography component="p" variant="h4">
                                                128
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <SentimentVeryDissatisfied fontSize="large" style={{ color: "red" }} />
                                                </Box>
                                                {/* <Box bgcolor="crimson" borderRadius={4} display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <SentimentVeryDissatisfied fontSize="large" style={{ color: "white" }} />
                                                </Box> */}
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Sentimen Negatif</Typography>
                                            <Typography component="p" variant="h4">
                                                128
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box mt={5}></Box>
                    {/* adasdas */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* asolo */}
                    <Box mt={5}></Box>
                    {/* adasdas */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={classes.fixedHeightChart}>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default DashboardAdminQoE
