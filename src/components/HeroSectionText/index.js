import React from 'react';
import { Box, Link, Button } from '@material-ui/core'

const HeroSectionText = () => {
    return (
        <Box>
            <Box
                fontWeight="fontWeightBold"
                fontSize="h2.fontSize"
                mt={2}
                mb={0}
            >
                Pantau
            </Box>

            <Box
                fontWeight="fontWeightBold"
                fontSize="h2.fontSize"
                mt={0}
            >
                Layanannya
            </Box>

            <Box
                fontWeight="fontWeightRegular"
                fontSize="body1.fontSize"
                my={5}
            >
                Lihat performa dari beberapa penyedia jasa internet. Gunakan platform ini untuk menambah pengetahuan Anda serta bahan pertimbangan Anda untuk menentukan pilihan yang tepat.
            </Box>

            <Box mb={{ xs: 1, md: 5 }}>
                <Link to="/">
                    <Button variant="contained" size="large" color="primary">
                        Coba Sekarang
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default HeroSectionText
