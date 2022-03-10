import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import './Services.css';


const services = [
    {
        name: "Fluoride Treatment",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptates doloremque sapiente dolor eos ullam dolorum ipsum voluptas. Earum reprehenderit qui fugiat officia distinctio ex perspiciatis aut.',
        img: flouride
    },
    {
        name: "Cavity Filling",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptates doloremque sapiente dolor eos ullam dolorum ipsum voluptas. Earum reprehenderit qui fugiat officia distinctio ex perspiciatis aut.',
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptates doloremque sapiente dolor eos ullam dolorum ipsum voluptas. Earum reprehenderit qui fugiat officia distinctio ex perspiciatis aut.',
        img: whitening
    }
]

const Services = () => {
    return (
        <>
            <section>
                <Box sx={{ flexGrow: 1 }}>
                    <Container className='text-center'>
                        <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h6" component="div">
                            OUR SERVICES
                        </Typography>
                        <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                            SERVICES WE PROVIDE
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                services.map(service => <Service
                                    key={service.name}
                                    service={service}
                                ></Service>)
                            }
                        </Grid>
                    </Container>
                </Box>
            </section>
        </>
    );
};

export default Services;