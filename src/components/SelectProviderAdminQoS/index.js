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
const SelectProviderAdminQoS = () => {

    const classes = useStyles();

    return (
        <form noValidate>
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={12} md={3}>
                    <Box>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Provider</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                //   value={age}
                                //   onChange={handleChange}
                                label="Provider"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>LifeMedia</MenuItem>
                                <MenuItem value={20}>IndiHome</MenuItem>
                                <MenuItem value={30}>Biznet</MenuItem>
                                <MenuItem value={30}>MyRepublic</MenuItem>
                                <MenuItem value={30}>FirsMedia</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Grid>
                <Grid item xs={12} md={2} >
                    <Box mx={{ xs: 0, md: 2 }} my={{ xs: 2, md: 0 }}>
                        <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                            Pilih
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form >
    )
}

export default SelectProviderAdminQoS
