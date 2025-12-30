import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import { Profile as Profiles } from '../../../types/tpyes';
import Button from '../../atoms/button/Button';
import styles from './styles/Profile.module.scss';

interface ProfileProps {
    profile: Profiles;
    onDownload: () => void;
}

const Profile = ({profile, onDownload}: ProfileProps) => {
    return (
        <Box className={clsN(styles['profile-wrapper'])}>
            {/* 이미지 */}
            <Box className={styles['profile-wrapper__image']}>
                <img src={profile.imageUrl} alt='프로필 이미지' />
            </Box>

            {/* 텍스트 */}
            <Box className={styles['profile-wrapper__main']}>
                <Box className={styles['profile-wrapper__name']}>
                    <Text text={profile.name} variant="h4" />
                    <Text text='|' variant="h4"/>
                    <Text text={profile.job} variant="h4" />
                </Box>
                <Text text={profile.content} variant="body1" className={styles['profile-wrapper__content']} />

                <Button
                    variant="contained"
                    className={styles['profile-wrapper__button']}
                    onClick={onDownload}
                >
                    Download Resume
                </Button>
            </Box>
        </Box>
    );
};

export default Profile;