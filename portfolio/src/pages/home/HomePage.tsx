import React from 'react';
import clsN from 'classnames';
import { useRecoilValue } from 'recoil';
import HomeTemplate from '../../components/templates/home/HomeTemplate';
import PageTransition from '../../components/transition/PageTransition';
import Layout from '../../components/layout/Layout';
import { careerAtom, profileAtom } from '../../recoil/atoms/profileAtom';
import styles from './styles/HomePage.module.scss';

const HomePage = () => {
    const profile = useRecoilValue(profileAtom);
    const careers = useRecoilValue(careerAtom);

    return (
        <div className={clsN(styles.home)}>
            <PageTransition profile={profile}>
                <Layout>
                    <HomeTemplate profile={profile} careers={careers} />
                </Layout>
            </PageTransition>
        </div>
    );
};

export default HomePage;