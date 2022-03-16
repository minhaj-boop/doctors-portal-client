import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                    console.log(data);
                }
            })
        e.preventDefault();
    }

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h2>This is make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic" onBlur={handleOnBlur} type="email" label="Email" variant="standard" />
                <Button type="submit" sx={{ backgroundColor: '#5254EA', color: '#E1E1F3' }} variant="contained">Make admin</Button>
            </form>
            {
                success && <Alert severity="success">Admin sucessfully made!</Alert>
            }

        </div>
    );
};

export default MakeAdmin;