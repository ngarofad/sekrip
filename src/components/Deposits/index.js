import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const Deposits = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h6" gutterBottom>Recent Deposits</Typography>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
            </Typography>
        </>
    );
}

export default Deposits
