import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password didn't match.");
        }
        e.preventDefault();
    }

    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography variant="body1">
                                Register
                            </Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Confirm password"
                                    name="password2"
                                    type="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <Button type="submit" sx={{ width: '75%', my: 3, backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">Register</Button>
                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button variant="text">Already have an account? Click To Login.</Button>
                                </NavLink>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} src={login} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Register;