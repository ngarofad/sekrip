import React from 'react'
import { Grid, Paper, TextField, Box, Button, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        minWidth: 200,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },

}));
const SelectDateDashISP = () => {

    const classes = useStyles();

    return (
        <form noValidate>
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={12} md={3}>
                    <Box mr={2} my={2}>
                        <TextField
                            id="dateStart"
                            label="Tanggal Mulai"
                            type="date"
                            defaultValue="2021-05-24"
                            fullWidth
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </Grid >
                <Grid item xs={12} md={3}>
                    <Box mr={2} my={2}>
                        <TextField
                            id="dateEnd"
                            label="Tanggal Selesai"
                            type="date"
                            defaultValue="2021-05-24"
                            className={classes.textField}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </Grid >
                <Grid item xs={12} md={2} >
                    <Box mx={{ xs: 0, md: 2 }} my={{ xs: 2, md: 0 }}>
                        <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                            Cari
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form >
    )
}

export default SelectDateDashISP
