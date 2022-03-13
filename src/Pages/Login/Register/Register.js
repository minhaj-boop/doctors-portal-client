import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const { user, authError, registerUser, isLoading } = useAuth();

    const history = useHistory();

    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
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

        registerUser(loginData.email, loginData.password, loginData.name, history);

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
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', my: 3 }}
                                    id="standard-basic"
                                    label="Confirm password"
                                    name="password2"
                                    type="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <Button type="submit" sx={{ width: '75%', my: 3, backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">Register</Button>
                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button variant="text">Already have an account? Click To Login.</Button>
                                </NavLink>
                            </form>}
                            {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, me: 2 }}>
                                <CircularProgress />
                            </Box>
                            }
                            {
                                user?.email && <Alert severity="success">Registered Successfully!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
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