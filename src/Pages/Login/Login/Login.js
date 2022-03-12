import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {

        e.preventDefault();
    }

    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography variant="body1">
                                Login
                            </Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    type="password"
                                />
                                <Button type="submit" sx={{ width: '75%', my: 3, backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">Login</Button>
                                <NavLink style={{ textDecoration: 'none' }} to="/register">
                                    <Button variant="text">New User? Click To Register.</Button>
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

export default Login;