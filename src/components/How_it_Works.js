import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WorkVideo from '../assets/images/video.png'
import Work_list from './Work_list';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background: 'transparent',
    boxShadow: 'none'
}));

export default function How_it_Works() {
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>

            <h6 className='text_primary secondary_heading'>
                How it works?
            </h6>
            <Grid container spacing={2} maxWidth="xl">
                <Grid item lg={6} md={6} xs={12}>
                    <Item sx={{ textAlign: 'left', mt: 3 }}>
                        <img src={WorkVideo} style={{width:'100%', objectFit:'containe'}} />
                    </Item>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Item sx={{ textAlign: 'left', mt: 3 }}>
                                <Work_list />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}
