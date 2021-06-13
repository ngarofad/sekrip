import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { logoBiznet, logoFirstMedia, logoIndiHome, logoLifeMedia, logoMyRepublic } from '../../assets'

const ListProvider = () => {
    return (
        <Grid container spacing={2} item justify="center" alignItems="center">
            <Grid item xs={12} md={2}>

                <Box textAlign="center">
                    <img src={logoLifeMedia} alt="logoLifeMedia" />
                </Box>

            </Grid>
            <Grid item xs={12} md={3}>

                <Box textAlign="center" >
                    <img src={logoIndiHome} alt="logoIndiHome" />
                </Box>

            </Grid>

            <Grid item xs={12} md={3}>

                <Box textAlign="center" >
                    <img src={logoMyRepublic} alt="logoMyRepublic" />
                </Box>

            </Grid>
            <Grid item xs={6} md={2}>

                <Box textAlign="center">
                    <img src={logoBiznet} alt="logoBiznet" />
                </Box>

            </Grid>
            <Grid item xs={6} md={2}>

                <Box textAlign="center" >
                    <img src={logoFirstMedia} alt="logoFirstMedia" />
                </Box>

            </Grid>
        </Grid>
    )
}

export default ListProvider
