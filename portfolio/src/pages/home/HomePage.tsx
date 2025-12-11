import React from "react";
import clsN from 'classnames';
import HomeTemplate from '../../components/templates/home/HomeTemplate';
import styles from './styles/HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={clsN(styles.home)}>
            <HomeTemplate/>
        </div>
    )
}

export default HomePage;