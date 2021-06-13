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
const SelectFileAdminQoS = () => {

    const classes = useStyles();

    return (
        <form noValidate>
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={12} md={3}>
                    <Box>
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                        >
                            Choose
                        <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={2} >
                    <Box mx={{ xs: 0, md: 2 }} my={{ xs: 2, md: 0 }}>
                        <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                            Unggah
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form >
    )
}

export default SelectFileAdminQoS
