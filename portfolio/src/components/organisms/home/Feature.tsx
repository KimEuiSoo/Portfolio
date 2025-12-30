import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import Card from '../../molecules/card/Card';
import { Career as Careers, Project } from '../../../types/tpyes';
import styles from './styles/Feature.module.scss'

interface FeatureProps{
    career: Careers
    onProjectClick?: (project: Project) => void;
}

const Feature = ({career, onProjectClick}: FeatureProps) => {
    return(
        <Box className={clsN(styles['feature-wrapper'])}>
            <Box className={clsN(styles['feature-header'])}>
                <Text text="My Project" variant="h6" />
            </Box>

            <Box className={clsN(styles['feature-wrapper__list'])}>
                {career?.projects?.map((project) => (
                    <Card
                        key={project.name}
                        title={project.name}
                        date={project.date}
                        position={project.position}
                        content={project.content}
                        onClick={()=>onProjectClick && onProjectClick(project)}
                        imgPath="https://placehold.co/600x400"
                        className={clsN(styles['feature-wrapper__card'])}
                        mediaClsN={clsN(styles['feature-wrapper__media'])}
                        contentClsN={clsN(styles['feature-wrapper__content'])}
                        variant='elevation'
                        elevation={0}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Feature