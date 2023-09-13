import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import '../assets/css/style.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'transparent',
    boxShadow: 'none'
}));

const numBars = 30;

// Create an array of bar elements
const bars = Array.from({ length: numBars }, (_, index) => (
    <div key={index} className='bar'></div>
));

export default function HeroSection() {
    return (
        <Box sx={{ flexGrow: 1, mt: 3, justifyContent: 'space-between' }}>
            <Grid container className='main_bg' spacing={2} sx={{ justifyContent: 'space-around' }} >
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Item>
                                <h1 className='text_primary main_heading'>
                                    Craft Your Startup
                                    Success story with <span className='text_secondary'>AI Pitch Assessment Technology</span>
                                </h1>
                                <p className='text_primary main_description'>
                                    Pitch to the world's #1 Research-based AI startup analyzer and get a comprehensive assessment
                                </p>
                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    <Item>
                                        <Button variant="contained" className='btn_primary'>Test my Pitch</Button>
                                    </Item>
                                    <Item>
                                        <p className='text_primary main_description'>
                                            See how it works
                                        </p>
                                    </Item>
                                    <Item>
                                        <Button className='main_play_btn'>
                                            <PlayArrowIcon />
                                        </Button>
                                    </Item>
                                </Stack>
                            </Item>
                        </Grid>
                        <Grid item lg={5} md={6} sm={6} xs={12}>
                            <h6 className='text_primary secondary_heading'>
                                Your Pitch
                            </h6>
                            <Card className='card_bg'>
                                <CardContent>
                                    <p className='text_primary main_description'>
                                        The Readiness item in your pitch was reasonably addressed, but there is room for improvement. While you briefly mentioned the readiness of your startup, you could have provided more specific details to demonstrate your preparedness for launching and delivering on your promises.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className='soundwave_card'>
                                <CardContent>
                                    <div class='sound-wave'>
                                        {bars}
                                    </div>
                                    {
                                        window.addEventListener("load", () => {
                                            const bar = document.querySelectorAll(".bar");
                                            for (let i = 0; i < bar.length; i++) {
                                                bar.forEach((item, j) => {
                                                    // Random move
                                                    item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`; // Change the numbers for speed / ( max - min ) + min / ex. ( 0.5 - 0.1 ) + 0.1
                                                });
                                            }
                                        })
                                    }
                                </CardContent>
                            </Card>
                            <h6 className='text_primary secondary_heading'>
                                Analysis
                            </h6>
                            <Card className='card_bg'>
                                <Accordion sx={{ backgroundColor: 'transparent', margin: '0px !important' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='text_primary'>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor: 'transparent', margin: '0px !important' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className='text_primary'>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor: 'transparent', margin: '0px !important' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='text_primary'>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor: 'transparent', margin: '0px !important' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className='text_primary'>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Card>
                        </Grid>
                    </Grid>

                </Container>

            </Grid>
        </Box>
    );
}