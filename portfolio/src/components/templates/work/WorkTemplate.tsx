import React from 'react';
import { Box } from '@mui/material';
import { Career } from '../../../types/tpyes';
import SwiperList from '../../organisms/common/SwiperList';

interface WorkTemplateProps{
    careers: Career[]
}

const WorkTemplate = ({careers}: WorkTemplateProps) => {

    return(
        <Box>
            <SwiperList items={careers}/>
        </Box>
    )
}

export default WorkTemplate