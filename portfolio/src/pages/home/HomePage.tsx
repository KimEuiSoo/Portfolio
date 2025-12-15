import React from "react";
import clsN from 'classnames';
import HomeTemplate from '../../components/templates/home/HomeTemplate';
import PageTransition from '../../components/transition/PageTransition';
import styles from './styles/HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={clsN(styles.home)}>
            <PageTransition>
                <HomeTemplate/>
            </PageTransition>
        </div>
    )
}

export default HomePage;