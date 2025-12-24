import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import { useRecoilValue } from 'recoil';
import { careerAtom } from '../../recoil/atoms/profileAtom';
import styles from './styles/WorkPage.module.scss'

const WorkPage = () => {
    const careers = useRecoilValue(careerAtom)

    console.log(careers);

    return(
        <Box className={clsN(styles.work)}>
            'Work'
        </Box>
    )
}

export default WorkPage