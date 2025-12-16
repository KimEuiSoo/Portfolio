export const CAREER: Career[] = [
    {
        career: '숭실대학교',
        date: '(2018 02 ~ 2026 02)',
        position: '컴퓨터학부',
        content: 'Android, React, React Native, JSP 등 다양한 기술 스택을 활용한 프로젝트 및 팀 과제를 수행하며 개발 역량을 쌓았습니다.\n' +
            '또한 스터디를 주도적으로 진행하며 반복적인 학습과 실습을 통해 기본기와 문제 해결 능력을 지속적으로 향상시켰습니다.',
        project: [{
            name: '길거리 쓰레기 방지 어플리케이션 버리다(Throw)',
            date: '(2024.03 - 2024.06)',
            position: 'Project Leader',
            content: '공공 환경 문제 해결을 목표로 기획된 공익 모바일 어플리케이션 프로젝트입니다.\n' +
                '최근 쓰레기 배출량은 증가하고 있는 반면, 시민이 이용할 수 있는 공공 쓰레기통은 지속적으로 감소하고 있다는 문제의식에서 출발하였습니다.\n' +
                '본 프로젝트에서는 정부 주도의 해결 방식과는 별개로, ' +
                '가게 홍보 효과를 기반으로 한 민간 참여 모델을 제안하여 ' +
                '공공 환경 개선과 지역 상권 활성화를 동시에 달성하는 방안을 설계하였습니다.\n' +
                '프로젝트 리더로서 기획 방향 설정, 기능 정의, 팀 일정 관리 전반을 담당하였습니다.',
            url: ['https://github.com/orgs/Beomboos/repositories'],
        }, {
            name: 'React 스터디',
            date: '(2024.07 - 2024.08)',
            position: '스터디 장',
            content: 'React 입문자를 대상으로 한 기초 학습 및 실습 중심 스터디를 운영하였습니다.\n' +
                '컴포넌트 구조와 렌더링 원리 설명을 시작으로, ' +
                '주요 Hook 사용법, Router 설정, 폴더 구조 설계, API 연동까지 단계적으로 학습을 진행하였습니다.\n' +
                '이론 설명과 함께 실습을 병행하여 ' +
                '참여자들이 실제 프로젝트 구조에 대한 이해를 높일 수 있도록 구성하였습니다.',
            url: ['https://humane-filament-dca.notion.site/?source=copy_link'],
        }, {
            name: '시각장애인 sns 어플리케이션 심청이',
            date: '(2024.06 - 2024.08)',
            position: 'Front-end Leader',
            content: '시각장애인을 위한 접근성 중심 SNS 어플리케이션 프로젝트입니다.\n' +
                '여행이나 모임 등의 경험을 사진과 함께 기록하고 공유할 수 있도록 기획되었습니다.\n' +
                '기존 SNS는 이미지 중심 구조로 인해 시각장애인의 접근성이 부족하며, ' +
                '대체 텍스트 입력이 사용자에게 맡겨져 있어 실제 활용이 어렵다는 문제를 가지고 있었습니다.\n' +
                '본 프로젝트에서는 생성형 AI를 활용해 이미지 대체 텍스트를 자동 생성하고,' +
                '이를 음성으로 안내하는 기능을 도입하여 접근성을 개선하였습니다.\n' +
                '또한 피드 UI를 확대하여 이용 편의성을 높이는 방향으로 설계하였습니다. ' +
                '프론트엔드 리더로서 UI 구조 설계 및 주요 기능 구현을 담당하였습니다.',
            url: ['https://github.com/simcheong2/simcheong2/tree/develop-fe'],
        }],
    },
    {
        career: '미디어 솔루션',
        date: '(2021.02 - 2023.02)',
        position: '키오스크 소프트웨어 개발자',
        content: 'WPF 기반 키오스크 소프트웨어 개발 및 유지보수를 담당하였으며, .NET Framework 환경에서 다수의 프로젝트를 경험하였습니다.\n' +
            '실제 운영 환경을 고려한 기능 개발과 안정적인 유지보수를 통해 실무 중심의 개발 경험을 쌓았습니다.',
        project: [{
            name: 'A병원 접수/수납 키오스크',
            date: '(2021.06 - 2021.07)',
            position: '소프트웨어 개발',
            content: 'WPF 기반으로 병원 접수·수납 키오스크를 개발했습니다.\n' +
                'MVVM 구조를 적용하여 UI·로직·데이터 레이어를 분리해 유지보수성을 향상시켰고,' +
                'MSSQL DB와 연동하여 환자 정보·결제 데이터의 실시간 조회 및 등록 기능을 구현했습니다.',
        }],
    },
];

interface Career {
    career: string,
    date: string,
    position: string,
    content: string,
    project?: Project[]
}

interface Project {
    name: string,
    date: string,
    position: string,
    content: string,
    url?: string[],
}