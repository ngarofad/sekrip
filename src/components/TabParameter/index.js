import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
// import { Icon } from "@material-ui/core";

// import { iconDelay, iconThroughput, iconPacketLoss, iconJitter } from '../../assets'
import { BorderStyle, Speed, SyncProblem, Update } from '@material-ui/icons';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={5}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({

}));


const TabParameter = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container justify="center">
            <Grid item md={12} sm={12}>
                <AppBar position="static" elevation={0} color="transparent" >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Throughput" icon={
                            <Speed />
                        } {...a11yProps(0)} />
                        <Tab label="Delay" icon={
                            <Update />
                        } {...a11yProps(1)} />
                        <Tab label="Jitter" icon={
                            // <MoreTimeIcon />
                            <SyncProblem />
                        } {...a11yProps(2)} />
                        <Tab label="Packet Loss" icon={
                            <BorderStyle />
                        } {...a11yProps(3)}
                        />
                        {/* <Tab label="Packet Loss" icon={
                            <Icon>
                                <img src={iconPacketLoss} height={30} width={30} alt="iconPacketLoss" />
                            </Icon>
                        } {...a11yProps(3)}
                        /> */}
                        {/* <Tab label="Packet Loss" icon={<HelpIcon />} {...a11yProps(3)} /> */}

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Grid container >
                        <Grid item md={6} xs={12}>
                            <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                asdasdasdas
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box>
                                asdasdasdas
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                    </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                    </TabPanel>
                <TabPanel value={value} index={3}>
                    <Typography variant="body1">Item Four asdasdas a asd asdasasd asd asdas das dasd s sad as da</Typography>
                </TabPanel>
            </Grid>
        </Grid>

    );
}

export default TabParameter
