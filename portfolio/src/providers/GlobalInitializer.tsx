import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useCollection } from '../hooks/useCollection';
import { Career, Profile } from '../types/tpyes';
import { careerAtom, globalInitAtom, profileAtom } from '../recoil/atoms/profileAtom';

const GlobalInitializer = () => {
    const [isReady, setIsReady] = useState(false);
    const [initialized, setInitialized] = useRecoilState(globalInitAtom);
    const setProfile = useSetRecoilState(profileAtom);
    const setCareers = useSetRecoilState(careerAtom);

    // 1. Careers 컬렉션 가져오기
    const {
        data: careers,
        loading: careersLoading
    } = useCollection<Career>('careers');

    // 2. Profile 컬렉션 가져오기
    const {
        data: profiles,
        loading: profilesLoading
    } = useCollection<Profile>('profile');

    useEffect(() => {
        // 컴포넌트가 마운트된 후 약간의 지연을 줍니다
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isReady || initialized || careersLoading || profilesLoading) return;

        if (careers.length > 0 && profiles.length > 0) {
            setCareers(careers);
            setProfile(profiles[0]);
            setInitialized(true);
        }
    }, [isReady, initialized, careers, profiles, careersLoading, profilesLoading, setCareers, setProfile, setInitialized]);

    return null;
}

export default GlobalInitializer