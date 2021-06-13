import React from 'react'
import { Grid, Box, Button, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        minWidth: 200,
    },

}));
const SelectProviderHome = () => {

    const classes = useStyles();

    return (
        <form noValidate>
            <Grid container item direction="row" alignItems="center" justify="space-between">
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
                <Grid item xs={12} md={3}>
                    <Box>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Lokasi</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                //   value={age}
                                //   onChange={handleChange}
                                label="Lokasi"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Sleman</MenuItem>
                                <MenuItem value={20}>Yogyakarta</MenuItem>
                                <MenuItem value={30}>Bantul</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Jenis Produk</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                //   value={age}
                                //   onChange={handleChange}
                                label="Jenis Produk"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10Mbps</MenuItem>
                                <MenuItem value={20}>20Mbps</MenuItem>
                                <MenuItem value={30}>30Mbps</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Box>
                        <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                            Cari
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form >
    )
}

export default SelectProviderHome
