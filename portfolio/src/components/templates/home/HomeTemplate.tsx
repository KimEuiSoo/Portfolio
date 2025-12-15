import React from 'react';
import clsN from 'classnames';
import Profile from '../../organisms/Profile';
import Career from '../../organisms/Career';
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
        </div>
    );
};

export default HomeTemplate;