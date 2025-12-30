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

    const handleDownloadResume = async () => {
        if (!profile?.resumeUrl) return;

        try {
            // 이미 full URL을 가지고 있으면 바로 사용
            const link = document.createElement('a');
            link.href = profile.resumeUrl;
            link.download = 'resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Resume download failed:', error);
        }
    };

    return (
        <div className={clsN(styles.home)}>
            <PageTransition profile={profile}>
                <Layout>
                    <HomeTemplate profile={profile} careers={careers} onDownload={handleDownloadResume}/>
                </Layout>
            </PageTransition>
        </div>
    );
};

export default HomePage;