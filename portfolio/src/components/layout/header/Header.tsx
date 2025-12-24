/* eslint-disable */
import React, { useState } from 'react';
import { Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import clsN from 'classnames';
import { Profile } from '../../../types/tpyes';
import Button from '../../atoms/button/Button';
import styles from '../styles/Header.module.scss';

interface HeaderProps {
    profile: Profile;
    onBlogClick: (profile: Profile) => void;
    onNavigationClick: (navigator: string) => void;
}

const Header = ({ profile, onBlogClick, onNavigationClick }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigationClick = (navigator: string) => {
        onNavigationClick(navigator);
        setMobileMenuOpen(false);
    };

    const handleBlogClick = () => {
        onBlogClick(profile);
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Header */}
            <Box className={clsN(styles['header-wrapper'])}>
                <Box className={clsN(styles['header-wrapper__desktop'])}>
                    <Button
                        className={clsN(styles['header-wrapper__button'])}
                        variant='text'
                        onClick={() => onNavigationClick('work')}
                    >
                        {'Work'}
                    </Button>
                    <Button
                        className={clsN(styles['header-wrapper__button'])}
                        variant='text'
                        onClick={() => onBlogClick(profile)}
                    >
                        {'Blog'}
                    </Button>
                    <Button
                        className={clsN(styles['header-wrapper__button'])}
                        variant='text'
                        onClick={() => onNavigationClick('career')}
                    >
                        {'Career'}
                    </Button>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    className={clsN(styles['header-wrapper__mobile-toggle'])}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor='right'
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className={clsN(styles['mobile-drawer'])}
            >
                <Box className={clsN(styles['mobile-menu'])}>
                    <IconButton
                        className={clsN(styles['mobile-menu__close'])}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="close menu"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box className={clsN(styles['mobile-menu__items'])}>
                        <Button
                            className={clsN(styles['mobile-menu__button'])}
                            variant='text'
                            onClick={() => handleNavigationClick('work')}
                        >
                            {'Work'}
                        </Button>
                        <Button
                            className={clsN(styles['mobile-menu__button'])}
                            variant='text'
                            onClick={handleBlogClick}
                        >
                            {'Blog'}
                        </Button>
                        <Button
                            className={clsN(styles['mobile-menu__button'])}
                            variant='text'
                            onClick={() => handleNavigationClick('career')}
                        >
                            {'Career'}
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;