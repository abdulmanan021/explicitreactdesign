import { Box, Container } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import York from '../assets/images/york.svg'
import Lassonde from '../assets/images/lassonde-white.svg'
import Best from '../assets/images/best-white.svg'
import Canadian from '../assets/images/canadian.svg'
import WaterLoo from '../assets/images/waterloo.svg'
import Mit from '../assets/images/mit.svg'
import TedX from '../assets/images/tedx.svg'


export default function TrustedEmployee() {
    return (
        <Box sx={{ width: '100%', backgroundColor: "#111827", padding: "20px 0px" }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="Space-between"
                >
                    <img width={90} src={York} />
                    <img width={90} src={Lassonde} />
                    <img width={90} src={Best} />
                    <img width={90} src={Canadian} />
                    <img width={90} src={WaterLoo} />
                    <img width={90} src={Mit} />
                    <img width={90} src={TedX} />
                </Stack>
            </Container>
        </Box>
    )
}
