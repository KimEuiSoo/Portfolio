import React from 'react';
import clsN from 'classnames';
import Profile from '../../organisms/home/Profile';
import Career from '../../organisms/home/Career';
import Feature from '../../organisms/home/Feature';
import { Career as Careers, Profile as Profiles } from '../../../types/tpyes';
import styles from './styles/HomeTemplate.module.scss';

const HomeTemplate = ({profile, careers}: {
    profile: Profiles
    careers: Careers[]
}) => {
    return (
        <div className={clsN(styles['home-container'])}>
            <div className={clsN(styles['home-container__profile'])}>
                <Profile profile={profile}/>
            </div>
            <section className={clsN(styles['home-container__careerSection'])}>
                <div className={clsN(styles['home-container__career'])}>
                    <Career careers={careers}/>
                </div>
            </section>
            <div className={clsN(styles['home-container__feature'])}>
                <Feature career={careers[0]}/>
            </div>
        </div>
    );
};

export default HomeTemplate;