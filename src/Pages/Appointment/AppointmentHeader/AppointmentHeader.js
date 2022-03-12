import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={12} md={6}>
                            <Calendar date={date} setDate={setDate}></Calendar>
                        </Grid>
                        <Grid sx={12} md={6}>
                            <img style={{ width: '100%' }} src={chair} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default AppointmentHeader;