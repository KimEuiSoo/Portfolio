import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import { PROFILE } from '../../util/profile/Profile';
import Text from '../atoms/text/Text';
import KimImage from '../../asset/images/kim.png';
import styles from './styles/Profile.module.scss';

const Profile = () => {
    return (
        <Box className={clsN(styles['profile-wrapper'])}>
            <Box className={styles['profile-wrapper__main']}>
                <Box className={styles['profile-wrapper__name']}>
                    <Text text={PROFILE.name} variant="h4" />
                    <Text text='|' variant="h4"/>
                    <Text text={PROFILE.job} variant="h4" />
                </Box>

                <Text text={PROFILE.title} variant="h5" />
                <Text text={PROFILE.content} variant="body1" className={styles['profile-wrapper__content']} />
            </Box>

            {/* 우측 이미지 */}
            <Box className={styles['profile-wrapper__image']}>
                <img src={KimImage} alt='사진없음' />
            </Box>
        </Box>
    );
};

export default Profile;