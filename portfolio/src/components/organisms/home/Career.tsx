import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import { Career as Careers } from '../../../types/tpyes';
import Card from '../../molecules/card/Card';
import styles from './styles/Career.module.scss';

const Career = ({careers}: {careers: Careers[]}) => {
    return(
        <Box className={clsN(styles['career-wrapper'])}>
            <Box className={clsN(styles['career-wrapper__title'])}>
                <Text text='Career' variant='h6'/>
            </Box>
            <Box className={clsN(styles['career-wrapper__list'])}>
                {careers.slice(0,2).map((career) => (
                    <Card
                        title={career.name}
                        date={career.date}
                        position={career.position}
                        content={career.content}
                        className={styles['career-wrapper__card']}
                        contentClsN={styles['career-wrapper__card-content']}
                        variant='outlined'
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Career