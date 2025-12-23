// 공통적으로 들어가는 id 필드 (선택 사항)
export interface BaseEntity {
    id: string;
}

export interface Career extends BaseEntity {
    name: string;
    date: string;
    position: string;
    content: string;
    projects?: Project[];
}

export interface Project extends BaseEntity {
    name: string;
    date: string;
    position: string;
    content: string;
    url: string;
}

export interface Profile extends BaseEntity {
    name: string;
    job: string;
    title: string;
    content: string;
    email: string;
    github: string;
    blog: string;
    phone: string;
}