import React from 'react';
import TextField from '@mui/material/TextField';
import clsN from 'classnames';
import styles from './styles/Input.module.scss'

interface InputProps {
    /* 클래스 요소 */
    // root 클래스명
    className?: string;
    // input 의 외형을 결정
    variant?: 'filled' | 'outlined' | 'standard';
    // 컴포넌트의 사이즈 small : 32px, medium: 40px?
    size?: 'small' | 'medium' | undefined;
    // 항목의 설명
    label?: React.ReactNode | undefined;
    // 문자나 이미지 등의 요소가 들어갈 자리에 임시로 채워놓는 내용물을 의미
    placeholder?: string | undefined;
    // input 값
    inputVal: string | number;
    // onChange 이벤트 활성화 시 오브젝트 e 를 통한 작업 처리 => 반환 없음
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // 여러줄 여부
    multiline?: boolean | undefined;
    // form 컨트롤의 이름을 지정 주로 폼에 있는 내용을 서버에 보낼때 활용
    name?: string | undefined;
    // 가로 최대 확장 여부
    fullWidth?: boolean | undefined;
}

const Input = ({
                   className,
                   variant,
                   size,
                   label,
                   placeholder,
                   inputVal,
                   onChange,
                   multiline,
                   name,
                   fullWidth,
               }: InputProps) => {
    return (
        <TextField
            value={inputVal}
            name={name}
            variant={variant}
            size={size}
            classes={{
                root: clsN(styles['root-input'], className),
            }}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            multiline={multiline}
            fullWidth={fullWidth}
        />
    );
};

Input.defaultProps = {
    className: styles[''],
    variant: 'filled',
    size: 'medium',
    label: undefined,
    placeholder: undefined,
    onChange: undefined,
    multiline: undefined,
    name: undefined,
    fullWidth: undefined,
};

export default Input;