import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import { useRecoilValue } from 'recoil';
import { careerAtom } from '../../recoil/atoms/profileAtom';
import WorkTemplate from '../../components/templates/work/WorkTemplate';
import styles from './styles/WorkPage.module.scss'

const WorkPage = () => {
    const careers = useRecoilValue(careerAtom)


    return(
        <Box className={clsN(styles.work)}>
            <WorkTemplate careers={careers}/>
        </Box>
    )
}

export default WorkPage