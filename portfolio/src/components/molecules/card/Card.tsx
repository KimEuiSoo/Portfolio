import React from 'react';
import PropTypes from 'prop-types';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import styles from './styles/Card.module.scss'

interface CardProps{
    title: string,
    date: string,
    position: string,
    content: string,
    className?: string;
    contentClsN?: string;
    onClick?: MuiCardProps['onClick'];
}

const Cards = ({title, date, position, content, className, contentClsN, onClick}: CardProps) => {
    return(
        <MuiCard className={clsN(className, styles.card)}>
            <CardContent className={clsN(contentClsN, styles.content)}>
                <Text text={title}/>
                <Text text={date}/>
                <Text text={position}/>
                <Text text={content}/>
            </CardContent>
        </MuiCard>
    )
}

Cards.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    contentClsN: PropTypes.string,
    onClick: PropTypes.func,
}

Cards.defaultProps = {
    title: '',
    date: '',
    position: '',
    content: '',
    className: styles[''],
    contentClsN: styles[''],
    onClick: undefined,
}

export default Cards;