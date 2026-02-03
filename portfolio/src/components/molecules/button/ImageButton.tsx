import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import Button from '../../atoms/button/Button';
import styles from './style/ImageButton.module.scss';

interface ImageBtnProps {
    className?: string;
    imgClsN?: string;
    imageUrl: string;
    alt?: string;
}

const ImageButton = ({className, imgClsN, imageUrl, alt}: ImageBtnProps) => {
    return(
        <Button className={clsN(className, styles.imgButton)}>
            <img className={clsN(imgClsN, `${styles.img}`)} src={imageUrl} alt={alt} />
        </Button>
    )
}

ImageButton.propTypes = {
    imgClsN: PropTypes.string,
    className: PropTypes.string,
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
};

ImageButton.defaultProps = {
    className: `${styles['']}`,
    imgClsN: `${styles['']}`,
    imageUrl: '',
    alt: '이미지가 비어있습니다.',
};

export default ImageButton