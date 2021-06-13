import React from 'react'
import clsx from 'clsx';
import { makeStyles, CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { Footer, Chart, Deposits, Orders, mainListItemsDashAdmin, secondaryListItemsDashAdmin, SelectProviderAdminQoS, SelectFileAdminQoS } from '../../components';
import { ListAlt, Speed, Update, SyncProblem, BorderStyle } from '@material-ui/icons';



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



const DashboardAdminQoS = () => {
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

                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" my={2}>
                        Admin
                    </Box>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" my={2}>
                        Quality of Service
                    </Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" my={2}>
                        Pilih Penyedia Jasa Internet
                    </Box>
                    <Box my={3}>
                        <SelectProviderAdminQoS />
                    </Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" my={2}>
                        Masukkan Pengukuran Quality of Service
                    </Box>
                    <Box my={3}>
                        <SelectFileAdminQoS />
                    </Box>

                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" mt={2} mb={4}>
                        Hasil
                    </Box>

                    {/* adasdas */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={classes.fixedHeightChart}>

                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Hasil QoS */}
                    {/* Throughput */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>

                        <Grid container item direction="column" justify="space-between" xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <Speed fontSize="large" style={{ color: "green" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Throughput</Typography>
                                            <Typography component="p" variant="h4">
                                                10.00 MBps
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                            <Box>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <ListAlt fontSize="large" style={{ color: "navy" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Standar</Typography>
                                            <Typography component="p" variant="h4">
                                                Good
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}></Box>

                    {/* Delay */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>

                        <Grid container item direction="column" justify="space-between" xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <Update fontSize="large" style={{ color: "orange" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Delay</Typography>
                                            <Typography component="p" variant="h4">
                                                0.1 ms
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                            <Box>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <ListAlt fontSize="large" style={{ color: "navy" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Standar</Typography>
                                            <Typography component="p" variant="h4">
                                                Good
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}></Box>

                    {/* Jitter */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>

                        <Grid container item direction="column" justify="space-between" xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <SyncProblem fontSize="large" style={{ color: "purple" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Jitter</Typography>
                                            <Typography component="p" variant="h4">
                                                0.1 ms
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                            <Box>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <ListAlt fontSize="large" style={{ color: "navy" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Standar</Typography>
                                            <Typography component="p" variant="h4">
                                                Good
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}></Box>

                    {/* Packet Loss */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.fixedHeightChart}>
                                <Chart />
                            </Paper>
                        </Grid>

                        <Grid container item direction="column" justify="space-between" xs={12} md={4} lg={4}>
                            <Box mb={1}>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <BorderStyle fontSize="large" style={{ color: "maroon" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Packet Loss</Typography>
                                            <Typography component="p" variant="h4">
                                                0.1 %
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                            <Box>
                                <Paper className={fixedHeightPaper} width="100%">
                                    <Grid container item direction="row" alignItems="center" justify="space-around" spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper>
                                                <Box display="flex" mt={1} alignItems="center" justifyContent="center" height={130}>
                                                    <ListAlt fontSize="large" style={{ color: "navy" }} />
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6" gutterBottom>Standar</Typography>
                                            <Typography component="p" variant="h4">
                                                Good
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}></Box>

                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default DashboardAdminQoS
