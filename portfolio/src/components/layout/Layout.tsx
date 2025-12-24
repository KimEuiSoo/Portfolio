/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../recoil/atoms/profileAtom';
import { Profile as Profiles } from '../../types/tpyes';
import { useNavigate } from 'react-router-dom';

const Layout = ({children}: {children: React.ReactNode}) => {
    const profile = useRecoilValue(profileAtom);
    const navigate = useNavigate();

    const onBlogClick = (profile: Profiles) => {
        if (!profile) return;
        window.open(profile.blog, '_blank', 'noopener,noreferrer');
    };

    const onNavigationHandle = (navigator: string) => {
        console.log({ navigator });
        navigate(navigator);
    }
    return(
        <Box>
            <Header profile={profile}
                    onBlogClick={(profile) => onBlogClick(profile)}
                    onNavigationClick={(navigator)=>onNavigationHandle(navigator)}/>
            <main>{children}</main>
            <Footer/>
        </Box>
    )
}

export default Layout