import { Container } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Union from '../assets/images/Union.svg'
import Share from '../assets/images/share.svg'
import AudioPlayer from './AudioPlayer';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background: 'transparent',
    boxShadow: 'none'
}));

export default function MakePitch() {
    return (
        <Container maxWidth="xxl" className='ptch_section_bg' sx={{ py: 5, mt: 5 }}>
            <Container maxWidth="lg">
                <h4 className='text_white' style={{ textAlign: 'center' }}>
                    Get Started
                </h4>
                <h1 className='main_heading text_white' style={{ textAlign: 'center' }}>
                    Make your pitch perfect
                </h1>
                <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Grid item md={5} xs={12}>
                        <Item>
                            <h4 className='text_white'>
                                Pitch
                            </h4>
                            <AudioPlayer />
                        </Item>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Item>
                            <h1 className='main_heading text_white'>
                                Grow your startup with <span className='text_secondary'>iterative pitching and A/B testing</span>
                            </h1>
                            <Stack direction="row" spacing={12}>
                                <img src={Union} />
                                <img src={Share} />
                            </Stack>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}
