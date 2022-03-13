import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, me: 2 }}>
            <CircularProgress />
        </Box>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;