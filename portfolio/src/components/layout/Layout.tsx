import React from 'react';
import { Box } from '@mui/material';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({children}: {children: React.ReactNode}) => {
    return(
        <Box>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Box>
    )
}

export default Layout