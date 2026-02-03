import React from 'react';
import { Box } from '@mui/material';
import { Career } from '../../../types/tpyes';

interface WorkTemplateProps{
    careers: Career[]
}

const WorkTemplate = ({careers}: WorkTemplateProps) => {
    console.log(careers);

    return(
        <Box>
            <div/>
        </Box>
    )
}

export default WorkTemplate