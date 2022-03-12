import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <>
            <section>
                <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={7}>
                            <Box>
                                <Typography variant="h3">
                                    Your New Smile <br />
                                    Starts Here
                                </Typography>
                                <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: '#9C9DE9', fontWeight: 300 }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quasi debitis aut, sed ducimus necessitatibus cumque aliquid quod asperiores neque commodi excepturi, explicabo vitae magnam!
                                </Typography>
                                <Button sx={{ backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">GET APPOINTMENT</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} style={verticalCenter}>
                            <img style={{ width: 370 }} src={chair} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Banner;