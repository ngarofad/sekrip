import { Box, Container, Paper, Grid, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
// import { Link } from 'react-router-dom'

import { ListAlt, Speed, Update, SyncProblem, BorderStyle } from '@material-ui/icons';

import { NavHome, Footer, HeroSectionText, HeroSectionImage, ListProvider, SelectProviderHome, TabParameter, Chart } from '../../components'

const useStyle = makeStyles((theme) => ({

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

}))

const Home = () => {

  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">

        {/* Content*/}
        <Grid container spacing={1} direction="column" justify="space-between">
          {/* Top Navigation Bar or AppBar */}
          <Grid item >
            <NavHome />
          </Grid>

          <Box my={3}></Box>

          {/* Main Page */}
          <Grid container item spacing={3}>
            <Box p={3} >

              {/* Hero Section */}
              {/* <Box> */}
              <Grid container item justify="space-between" direction="row-reverse">
                {/* Image Hero Section */}
                <Grid item xs={12} sm={12} md={5}>
                  <Box>
                    <HeroSectionImage />
                  </Box>
                </Grid>
                {/* Text Hero Section */}
                <Grid item xs={12} sm={12} md={5}>
                  <Box>
                    <HeroSectionText />
                  </Box>
                </Grid>
              </Grid>
              {/* </Box> */}

              <Box my={5}></Box>

              {/* ISP List */}
              <Grid container item>
                <Grid item xs={12} md={12}>
                  <Box mt={5} mb={5}
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightBold"
                  >
                    Daftar Penyedia Layanan Internet
                    </Box>
                </Grid>

                <ListProvider />

              </Grid>

              <Box my={5}></Box>

              {/* Info Parameter QOS */}
              <Grid container item>
                <Grid item xs={12} md={12}>
                  <Box mt={5} mb={5}
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightBold"
                  >
                    Parameter Quality of Service
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box>
                    <TabParameter />
                  </Box>
                </Grid>
              </Grid>

              <Box my={5}></Box>

              {/* Pengukuran QOS*/}
              <Grid container item direction="column" >
                <Grid item xs={12} md={12}>
                  <Box mt={5} mb={3}
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightBold"
                  >
                    Pengukuran Quality of Service
                    </Box>
                </Grid>

                <Box p={1}>
                  <SelectProviderHome />
                </Box>
                <Box m={2}></Box>
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


              </Grid>

            </Box>
          </Grid>


          {/* Footer */}
          <Grid item >
            <Box mb={3}>
              <Footer />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Home;
