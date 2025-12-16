import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import { CAREER } from '../../../util/profile/Career';
import Card from '../../molecules/card/Card';
import styles from './styles/Feature.module.scss'

const Feature = () => {
    return(
        <Box className={clsN(styles['feature-wrapper'])}>
            <Box className={clsN(styles['feature-header'])}>
                <Text text="Featured works" variant="h6" />
            </Box>

            <Box className={clsN(styles['feature-wrapper__list'])}>
                {CAREER[0]?.project?.map((project) => (
                    <Card
                        key={project.name}
                        title={project.name}
                        date={project.date}
                        position={project.position}
                        content={project.content}
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