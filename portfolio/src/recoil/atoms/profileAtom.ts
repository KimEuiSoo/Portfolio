import { atom } from 'recoil';
import { Career, Profile } from '../../types/tpyes';
import { EMPTY_CAREER, EMPTY_PROFILE } from '../../contants/empty';

export const profileAtom = atom<Profile>({
    key: 'profile',
    default: EMPTY_PROFILE,
})

export const careerAtom = atom<Career[]>({
    key: 'careers',
    default: [EMPTY_CAREER]
})

export const globalInitAtom = atom({
    key: '',
    default: false
})