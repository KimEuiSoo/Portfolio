import { Career, Profile, Project } from '../types/tpyes';

export const EMPTY_PROFILE = <Profile>{
    name: '',
    job: '',
    title: '',
    content: '',
    email: '',
    github: '',
    blog: '',
    phone: ''
}

export const EMPTY_CAREER = <Career>{
    name:'',
    date:'',
    position:'',
    content:'',
    projects: {},
}

export const EMPTY_PROJECT = <Project>{
    name:'',
    date:'',
    position:'',
    content:'',
    url:'',
}