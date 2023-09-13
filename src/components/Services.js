import React from 'react'
import { ServicesData } from './ServicesData'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'transparent',
    boxShadow: 'none'
}));

export default function Services() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ mt: 5 }} maxWidth="xl">
                {ServicesData.map((services) => (
                    <Grid item lg={3} md={6} xs={6}>
                        <Item sx={{ textAlign: 'left', mt: 3 }}>
                            {services.image}
                            <h6 className='secondary_heading'>{services.heading}</h6>
                            <p className='text_primary'>{services.description}</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
