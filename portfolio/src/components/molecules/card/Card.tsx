import React from 'react';
import PropTypes from 'prop-types';
import { Card as MuiCard, CardActionArea, CardContent, CardMedia, CardProps as MuiCardProps } from '@mui/material';
import clsN from 'classnames';
import Text from '../../atoms/text/Text';
import styles from './styles/Card.module.scss';

interface CardProps extends MuiCardProps {
    title: string,
    date: string,
    position: string,
    content: string,
    className?: string;
    contentClsN?: string;
    mediaClsN?: string;
    onClick?: MuiCardProps['onClick'];
    variant?: MuiCardProps['variant'];
    elevation?: number;
    imgPath?: string;
}

const Cards = ({
                   title,
                   date,
                   position,
                   content,
                   className,
                   contentClsN,
                   mediaClsN,
                   onClick,
                   variant,
                   elevation,
                   imgPath,
               }: CardProps) => {
    return (
        <MuiCard className={clsN(className, styles.card)} variant={variant} elevation={elevation} onClick={onClick}>
            <CardActionArea>
                <CardMedia className={clsN(mediaClsN, styles.media)} image={imgPath}/>
                <CardContent classes={{
                    root: clsN(contentClsN, styles.content),
                }}>
                    <Text text={title} />
                    <Text text={date} />
                    <Text text={position} />
                    <Text text={content} />
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

Cards.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    contentClsN: PropTypes.string,
    mediaClsN: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['outlined', 'elevation', undefined]),
    elevation: PropTypes.number,
    imgPath: PropTypes.string,
};

Cards.defaultProps = {
    title: '',
    date: '',
    position: '',
    content: '',
    className: styles[''],
    contentClsN: styles[''],
    mediaClsN: styles[''],
    onClick: undefined,
    variant: 'outlined',
    elevation: 0,
    imgPath: '',
};

export default Cards;