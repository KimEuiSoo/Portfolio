/* eslint-disable */
import React, { useEffect } from 'react';
import clsN from 'classnames';
import HomeTemplate from '../../components/templates/home/HomeTemplate';
import PageTransition from '../../components/transition/PageTransition';
import styles from './styles/HomePage.module.scss';
import { Career, Profile } from '../../types/tpyes';
import { useCollection } from '../../hooks/useCollection';

const HomePage = () => {
    // 1. Careers 컬렉션 가져오기 (변수명 충돌 방지를 위해 구조분해 할당 시 이름 변경)
    const {
        data: careers,
        loading: loadingCareers,
        error: errorCareers
    } = useCollection<Career>('careers');

    // 2. Profile 컬렉션 가져오기
    const {
        data: profiles,
        loading: loadingProfiles,
        error: errorProfiles
    } = useCollection<Profile>('profile');

    // 에러 발생 시 처리
    if (errorCareers || errorProfiles) {
        return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
    }

    useEffect(() => {
        if(careers) console.log(careers);
        if(profiles) console.log(profiles);
    }, [careers]);

    return (
        <div className={clsN(styles.home)}>
            <PageTransition profile={profiles[0]}>
                <HomeTemplate profile={profiles[0]} careers={careers}/>
            </PageTransition>
        </div>
    )
}

export default HomePage;