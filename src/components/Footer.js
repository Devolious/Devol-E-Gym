import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.jpg';

const Footer = () => (
  <Box id="about" mt="80px" bgcolor="#f3edab">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '210px', height: '60px' }} />
    </Stack>
    <Typography variant="h2" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤ by Shashwat Kumar Mohanty</Typography>
  </Box>
);

export default Footer;
