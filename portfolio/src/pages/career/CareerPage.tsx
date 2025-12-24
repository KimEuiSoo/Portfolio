import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import { useRecoilValue } from 'recoil';
import { careerAtom } from '../../recoil/atoms/profileAtom';
import styles from './styles/CareerPage.module.scss'

const CareerPage = () => {
    const careers = useRecoilValue(careerAtom)

    console.log(careers);

    return(
        <Box className={clsN(styles.career)}>
            'Career'
        </Box>
    )
}

export default CareerPage