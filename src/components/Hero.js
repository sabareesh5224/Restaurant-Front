// src/components/Hero.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'url(/path/to/your/hero-image.jpg) center/cover no-repeat',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Restaurant
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Enjoy delicious food and great atmosphere
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        View Menu
      </Button>
    </Box>
  );
};

export default Hero;
