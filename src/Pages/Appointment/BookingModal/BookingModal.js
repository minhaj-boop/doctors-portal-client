import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {

    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: ''
    }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        //collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        //and send to server
        fetch('http://localhost:5000/appointment/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

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
                                    required
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    name="patientName"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    placeholder="Name"
                                    size="small"
                                />
                                <TextField
                                    required
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email}
                                    placeholder="Email"
                                    size="small"
                                />
                                <TextField
                                    autoFocus
                                    required
                                    sx={{ width: '98%', margin: 1, }}
                                    id="outlined-size-small"
                                    name="phone"
                                    onBlur={handleOnBlur}
                                    placeholder='Phone Number'
                                    size="small"
                                />
                                <TextField
                                    disabled
                                    sx={{ width: '98%', margin: 1 }}
                                    id="outlined-size-small"
                                    defaultValue={date.toDateString()}
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