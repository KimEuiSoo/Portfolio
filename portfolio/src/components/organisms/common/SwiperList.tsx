import React from 'react';
import { Box } from '@mui/material';
import { Career, Project } from '../../../types/tpyes';

interface SwiperListProps{
    items: Project[] | Career[];
    onClick?: (item: Project | Career) => void;
}

const SwiperList = ({items, onClick}: SwiperListProps) => {
    return(
        <Box>
            <div/>
        </Box>
    )
}

export default SwiperList