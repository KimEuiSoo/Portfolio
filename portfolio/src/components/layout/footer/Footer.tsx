import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import { Email, Phone, GitHub, Article } from '@mui/icons-material';
import styles from '../styles/Footer.module.scss';
import { Profile } from '../../../types/tpyes';

const Footer = ({profile}: {profile: Profile}) => {
    const [phones, setPhones] = useState<string>("");

    useEffect(() => {
        if(profile && profile.phone){
            const formatted = profile.phone
                .replace(/^010/, "+82 10")
                .replace(/-/g, " ");

            setPhones(formatted);
        }
    }, [profile]);

    return(
        <Box className={clsN(styles['footer-wrapper'])}>
            <div className={styles['footer-container']}>
                <h2 className={styles['footer-title']}>Lets Connect there</h2>

                <div className={styles['contact-section']}>
                    <h3 className={styles['contact-title']}>Contact</h3>

                    <ul className={styles['contact-list']}>
                        <li className={styles['contact-item']}>
                            <Phone className={styles['contact-icon']} />
                            <span>{phones}</span>
                        </li>
                        <li className={styles['contact-item']}>
                            <Email className={styles['contact-icon']} />
                            <span>{profile.email}</span>
                        </li>
                        <li className={styles['contact-item']}>
                            <GitHub className={styles['contact-icon']} />
                            <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                {profile.github}
                            </a>
                        </li>
                        <li className={styles['contact-item']}>
                            <Article className={styles['contact-icon']} />
                            <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                                {profile.blog}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Box>
    )
}

export default Footer