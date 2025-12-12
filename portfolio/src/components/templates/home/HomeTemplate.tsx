import React from 'react';
import clsN from 'classnames';
import Profile from '../../organisms/Profile';
import styles from './styles/HomeTemplate.module.scss'

const HomeTemplate = () => {
    return (
        <div className={clsN(styles["home-container"])}>
            <Profile />
            <div className={clsN(styles["home-container__career"])}>
                <div/>
            </div>
        </div>
    )
}

export default HomeTemplate;