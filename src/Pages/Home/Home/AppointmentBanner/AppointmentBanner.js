import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../../images/doctor.png'
import bg from '../../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 200,
    backgroundColor: 'rgba(101, 95, 93, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <>
            <section>
                <Container>
                    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <Box>
                                    <Typography sx={{ mt: 2, color: '#090DF1' }} variant="h6" component="div">
                                        APPOINTMENT
                                    </Typography>
                                    <Typography sx={{ mt: 2, color: '#E1E1F3' }} variant="h4" component="div">
                                        Make An Appointment Today
                                    </Typography>
                                    <Typography sx={{ mt: 2, mb: 2, color: '#EBEBF5', fontSize: 18, fontWeight: 200 }} variant="h6" component="div">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa porro numquam dignissimos itaque corrupti necessitatibus unde asperiores
                                    </Typography>
                                    <Button sx={{ backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">LEARN MORE</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default AppointmentBanner;