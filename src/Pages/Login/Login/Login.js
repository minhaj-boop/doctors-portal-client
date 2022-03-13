import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, user, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
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
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
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
                                <p>---------------------------or------------------------</p>
                                <GoogleButton onClick={handleGoogleSignIn} style={{ marginBottom: 15, color: 'black', fontWeight: '700' }} type="light" />
                            </form>}
                            {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, me: 2 }}>
                                <CircularProgress />
                            </Box>
                            }
                            {
                                user?.email && <Alert severity="success">Login Sucessful</Alert>
                            }
                            {
                                authError && <Alert severity="error">Invalid email or password!</Alert>
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

export default Login;