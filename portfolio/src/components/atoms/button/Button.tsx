import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Button.module.scss';


interface ButtonProps extends MuiButtonProps {
    id?: string;
    className?: string;
    variant?: MuiButtonProps['variant'];
    children: React.ReactNode;
    onClick?: MuiButtonProps['onClick'];
    onMouseOver?: MuiButtonProps['onMouseOver'];
    size?: MuiButtonProps['size'];
}

const Button = ({ id, className, variant, children, onClick, onMouseOver, size, disabled , ...props}: ButtonProps) => {
    return (
        <MuiButton
            id={id}
            aria-label="Button label"
            className={clsN(className, styles.button)}
            variant={variant}
            onClick={onClick}
            onMouseOver={onMouseOver}
            disabled={disabled}
            size={size}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', undefined]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large', undefined]),
};

Button.defaultProps = {
    id: undefined,
    className: styles.button,
    variant: 'contained',
    onClick: undefined,
    onMouseOver: undefined,
    size: 'medium',
};


export default Button;