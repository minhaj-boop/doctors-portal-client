import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper style={{ textAlign: 'center' }} sx={{ py: 5 }} elevation={3}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block">
                        {space} spaces available
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{ backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;