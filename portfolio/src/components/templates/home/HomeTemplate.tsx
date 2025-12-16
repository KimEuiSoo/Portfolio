import React from 'react';
import clsN from 'classnames';
import Profile from '../../organisms/home/Profile';
import Career from '../../organisms/home/Career';
import Feature from '../../organisms/home/Feature';
import styles from './styles/HomeTemplate.module.scss';

const HomeTemplate = () => {
    return (
        <div className={clsN(styles['home-container'])}>
            <div className={clsN(styles['home-container__profile'])}>
                <Profile />
            </div>
            <section className={clsN(styles['home-container__careerSection'])}>
                <div className={clsN(styles['home-container__career'])}>
                    <Career />
                </div>
            </section>
            <div className={clsN(styles['home-container__feature'])}>
                <Feature />
            </div>
        </div>
    );
};

export default HomeTemplate;