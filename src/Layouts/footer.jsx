import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import './CSS/footer.css';  // Ensure you have the CSS file or remove if not needed

function Footer() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <Box component="footer" sx={{ backgroundColor: '#f8f9fa', textAlign: 'center', py: 3 }}>
        <Box sx={{ mb: 2 }}>
          <IconButton
            sx={{ backgroundColor: '#3b5998', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://www.facebook.com/clbusac')}
          >
            <Facebook />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: '#55acee', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://twitter.com')}
          >
            <Twitter />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: '#dd4b39', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://google.com')}
          >
            <Google />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: '#ac2bac', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://instagram.com')}
          >
            <Instagram />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: '#0082ca', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://linkedin.com')}
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: '#333333', mx: 0.5 }}
            color="inherit"
            onClick={() => handleRedirect('https://github.com')}
          >
            <GitHub />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', py: 1 }}>
          @2024 Copyright:
          <a href="https://www.facebook.com/camthanhlmi/" style={{ textDecoration: 'none', color: 'inherit' }}>
            hehehe
          </a>
        </Typography>
      </Box>
    </>
  );
}

export default Footer;