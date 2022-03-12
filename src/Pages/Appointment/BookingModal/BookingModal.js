import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,

};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {

    const { name, time } = booking;

    const handleBookingSubmit = e => {
        alert('Submitted');

        //collect data
        //and send to server

        handleBookingClose();
        e.preventDefault();
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Box style={{ textAlign: 'end' }}>
                            <form>
                                <TextField
                                    disabled
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue={time}
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue="Name"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue="Phone no"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue="Email"
                                    size="small"
                                />
                                <TextField
                                    disabled
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue={date}
                                    size="small"
                                />

                                <Button onClick={handleBookingSubmit} type="submit" sx={{ backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">SUBMIT</Button>

                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;