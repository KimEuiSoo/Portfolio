import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Image.module.scss';

export interface ImgProps {
    imgPath: string; // Prop 가 `@asset/image...` 경로를 전달
    className?: string;
    alt?: string;
}

const Image = ({ imgPath, className, alt }: ImgProps) => {
    return <img className={clsN(className, `${styles.img}`)} src={`${imgPath}`} alt={alt} />;
};

Image.propTypes = {
    imgPath: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
};

Image.defaultProps = {
    className: `${styles.img}`,
    alt: '이미지가 존재하지 않습니다.',
};

export default Image;