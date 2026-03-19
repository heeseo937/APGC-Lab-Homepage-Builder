// =============================================
//  APGC-Lab — Shared Data
// =============================================

const PROGRAMS = {
  bootcamp: {
    id: 'bootcamp',
    num: '01',
    title: 'Startup Bootcamp',
    subtitle: '아이디어를 사업으로 만드는 8주',
    tags: ['8주 과정', '팀 프로젝트', '멘토링'],
    featured: false,
    overview: `매 학기 운영되는 APGC-Lab의 대표 프로그램입니다. 창업 경험이 없는 학생도 참여 가능하며, 아이디어 발굴부터 시장 검증, MVP 제작, 최종 피칭까지 8주간 집중적으로 진행합니다. 각 팀에는 현직 창업가 멘토가 1:1로 배정되어 실전 조언을 제공합니다.`,
    details: [
      { icon: '📅', label: '일정', value: '매 학기 1회 (3월, 9월 개강)' },
      { icon: '👥', label: '모집 인원', value: '팀당 3~5명, 최대 6팀' },
      { icon: '📍', label: '장소', value: 'POSTECH 창업보육센터 세미나실' },
      { icon: '💰', label: '참가비', value: '무료 (POSTECH 재학생 한정)' },
      { icon: '🏆', label: '수료 혜택', value: 'Demo Day 참가 자격 + 창업 지원금 신청 가능' },
    ],
    curriculum: [
      { week: 'Week 1–2', title: '아이디어 발굴 & 팀 빌딩', desc: '린 캔버스 작성, 팀 결성, 문제 정의 워크숍' },
      { week: 'Week 3–4', title: '시장 조사 & 고객 인터뷰', desc: '타겟 고객 정의, 현장 인터뷰 30건 이상, PMF 검증' },
      { week: 'Week 5–6', title: 'MVP 제작', desc: '프로토타입 개발, UX 설계, 초기 사용자 테스트' },
      { week: 'Week 7', title: '비즈니스 모델 정교화', desc: '수익 모델 설계, 경쟁사 분석, 투자자 관점 검토' },
      { week: 'Week 8', title: '최종 피칭', desc: '5분 피칭 + Q&A, 멘토·투자자 패널 피드백' },
    ],
    events: [
      {
        season: '2025 Spring',
        date: '2025년 3월 – 5월',
        teams: 5,
        participants: 22,
        highlight: '최우수팀 "HealthLink" — 병원-환자 연결 앱, 이후 팁스(TIPS) 프로그램 선정',
        materials: [
          { title: '2025 Spring 최종 피칭 자료 모음', type: 'PDF' },
          { title: '멘토 강연 녹화 영상 (전 5회)', type: 'Video' },
          { title: '린 캔버스 템플릿', type: 'Template' },
        ],
      },
      {
        season: '2024 Fall',
        date: '2024년 9월 – 11월',
        teams: 6,
        participants: 26,
        highlight: '최우수팀 "GreenRoute" — 탄소 절감 물류 최적화, 누적 투자 유치 2억 원',
        materials: [
          { title: '2024 Fall 피칭 덱 모음', type: 'PDF' },
          { title: '고객 인터뷰 가이드북', type: 'PDF' },
          { title: '세션별 발표 슬라이드', type: 'Slides' },
        ],
      },
      {
        season: '2024 Spring',
        date: '2024년 3월 – 5월',
        teams: 4,
        participants: 18,
        highlight: '최우수팀 "EduBridge" — 지역 교육 격차 해소 플랫폼, 교육부 장관상 수상',
        materials: [
          { title: '2024 Spring 발표자료 아카이브', type: 'PDF' },
          { title: '멘토링 후기 인터뷰 영상', type: 'Video' },
        ],
      },
      {
        season: '2023 Fall',
        date: '2023년 9월 – 11월',
        teams: 5,
        participants: 21,
        highlight: '최초 부트캠프 졸업팀 3팀이 Demo Day에서 외부 투자자 피칭 성공',
        materials: [
          { title: '1기 부트캠프 회고록', type: 'PDF' },
          { title: '창업 기초 강의 자료', type: 'Slides' },
        ],
      },
    ],
  },

  hackathon: {
    id: 'hackathon',
    num: '02',
    title: 'Idea Hackathon',
    subtitle: '48시간, 아이디어를 현실로',
    tags: ['48시간', '시드 펀딩', '네트워킹'],
    featured: true,
    overview: `매년 개최되는 APGC-Lab 최대 규모 행사입니다. 48시간 동안 팀을 이루어 사회 문제 또는 기술 혁신 주제의 프로토타입을 만들고 피칭합니다. 우수 팀에게는 최대 500만 원의 시드 펀딩과 멘토링 패키지가 제공되며, 현직 VC와 창업가가 심사에 참여합니다.`,
    details: [
      { icon: '📅', label: '일정', value: '매년 11월 (주말 이틀)' },
      { icon: '👥', label: '참가 규모', value: '개인 참가 후 현장 팀 빌딩, 최대 80명' },
      { icon: '📍', label: '장소', value: 'POSTECH 무은재기념관 대강당 & 해커톤홀' },
      { icon: '💰', label: '시상', value: '대상 500만 원 / 최우수상 200만 원 / 우수상 100만 원' },
      { icon: '🏆', label: '추가 혜택', value: 'VC 멘토링 세션 + POSTECH 창업보육센터 입주 우선권' },
    ],
    curriculum: [
      { week: 'Day 1 오전', title: '개막식 & 팀 빌딩', desc: '주제 발표, 자기소개 피칭, 팀 결성' },
      { week: 'Day 1 오후~밤', title: '아이디어 개발 & 제작', desc: '멘토 라운드 1, 중간 체크포인트' },
      { week: 'Day 2 오전', title: '마무리 개발 & 피칭 준비', desc: '멘토 라운드 2, 데모 완성' },
      { week: 'Day 2 오후', title: '최종 피칭 & 시상', desc: '팀당 5분 피칭 + Q&A, 심사 및 시상식' },
    ],
    events: [
      {
        season: '2025 Hackathon',
        date: '2025년 11월 8–9일',
        teams: 14,
        participants: 68,
        highlight: '대상 "AquaSense" — 수질 오염 실시간 IoT 모니터링, 환경부 협력 MOU 체결',
        materials: [
          { title: '2025 해커톤 전체 피칭 영상', type: 'Video' },
          { title: '수상팀 데모 및 발표 자료', type: 'PDF' },
          { title: '해커톤 운영 가이드 (참가자용)', type: 'PDF' },
        ],
      },
      {
        season: '2024 Hackathon',
        date: '2024년 11월 9–10일',
        teams: 12,
        participants: 57,
        highlight: '대상 "MediRoute" — 응급 환자 이송 최적화 시스템, 이후 실제 119 연계 PoC 진행',
        materials: [
          { title: '2024 해커톤 하이라이트 영상', type: 'Video' },
          { title: '수상팀 피칭 덱 모음', type: 'PDF' },
        ],
      },
      {
        season: '2023 Hackathon',
        date: '2023년 11월 11–12일',
        teams: 10,
        participants: 44,
        highlight: '첫 외부 참가자 초청 — KAIST, UNIST 학생 참여로 교류 확대',
        materials: [
          { title: '제1회 APGC 해커톤 기록집', type: 'PDF' },
          { title: '주제 발표 및 심사 기준 자료', type: 'Slides' },
        ],
      },
    ],
  },

  mentor: {
    id: 'mentor',
    num: '03',
    title: 'Mentor Connect',
    subtitle: '현직 창업가와의 직접 연결',
    tags: ['1:1 멘토링', 'VC 연결', '월 2회'],
    featured: false,
    overview: `현직 창업가, VC 투자자, 대기업 C-레벨 임원과 1:1 멘토링 세션을 연결해주는 프로그램입니다. 매월 2회 진행되며 멘티는 사전 질문지를 통해 맞춤형 피드백을 받을 수 있습니다. 단순 강의가 아닌, 나의 아이디어와 현황을 가지고 대화하는 실질적인 자리입니다.`,
    details: [
      { icon: '📅', label: '일정', value: '매월 2회 (2주차, 4주차 토요일)' },
      { icon: '👥', label: '모집 인원', value: '회당 멘티 5명 (선착순)' },
      { icon: '📍', label: '진행 방식', value: '오프라인 (POSTECH) 또는 온라인 Zoom' },
      { icon: '⏱️', label: '세션 시간', value: '멘토 1인당 30분 × 멘티 5명' },
      { icon: '🎯', label: '대상', value: '아이디어 단계부터 초기 스타트업 운영 중인 팀' },
    ],
    curriculum: [
      { week: '신청', title: '사전 신청 & 매칭', desc: '멘티 신청서 제출 → 멘토 매칭 → 사전 질문지 공유' },
      { week: '당일', title: '1:1 멘토링 세션', desc: '30분 심층 대화, 아이디어·팀·전략 피드백' },
      { week: '사후', title: '팔로업 & 네트워킹', desc: '멘토 추천 자료 공유, 필요 시 추가 연락처 연결' },
    ],
    events: [
      {
        season: '2025년 누적',
        date: '2025년 1월 – 12월',
        teams: 0,
        participants: 48,
        highlight: '멘토 풀 23인 확보 (창업가 12, VC 7, 대기업 4) — 멘티 만족도 4.8/5.0',
        materials: [
          { title: '멘토 소개 프로파일 (2025)', type: 'PDF' },
          { title: '멘토링 신청 가이드', type: 'PDF' },
          { title: '인기 Q&A 아카이브', type: 'PDF' },
        ],
      },
      {
        season: '2024년 누적',
        date: '2024년 3월 – 12월',
        teams: 0,
        participants: 35,
        highlight: '처음으로 시리즈B 이상 창업가 멘토 초청, 글로벌 진출 세션 인기',
        materials: [
          { title: '2024 멘토링 후기 모음', type: 'PDF' },
          { title: '추천 창업 도서 & 아티클 리스트', type: 'PDF' },
        ],
      },
    ],
  },

  demoday: {
    id: 'demoday',
    num: '04',
    title: 'Demo Day',
    subtitle: '투자자 앞에서 증명하는 날',
    tags: ['학기별', '투자 유치', '파트너십'],
    featured: false,
    overview: `학기말 투자자·기업 앞에서 피칭하는 공식 데모데이입니다. Bootcamp 수료팀 및 자체 창업 팀 모두 참여 가능하며, 실제 초기 투자 및 파트너십이 이루어지는 자리입니다. VC, 액셀러레이터, 대기업 오픈 이노베이션 담당자 등 30명 이상의 외부 관계자가 참석합니다.`,
    details: [
      { icon: '📅', label: '일정', value: '매 학기 말 (6월, 12월)' },
      { icon: '👥', label: '피칭 팀', value: '최대 10팀 (Bootcamp 수료팀 우선 선발)' },
      { icon: '📍', label: '장소', value: 'POSTECH 체인지업그라운드 or 포항창업센터' },
      { icon: '⏱️', label: '발표 형식', value: '팀당 7분 피칭 + 5분 Q&A' },
      { icon: '🏆', label: '성과', value: '누적 투자 유치 약 8억 원 (2023~2025)' },
    ],
    curriculum: [
      { week: '2주 전', title: '피칭 덱 리뷰', desc: '멘토 및 운영진과 발표 자료 피드백 세션' },
      { week: '1주 전', title: '리허설', desc: '실전 피칭 리허설 및 Q&A 대비 훈련' },
      { week: 'Demo Day', title: '본 행사', desc: '피칭 → Q&A → 네트워킹 만찬' },
    ],
    events: [
      {
        season: '2025 Fall Demo Day',
        date: '2025년 12월 5일',
        teams: 8,
        participants: 0,
        highlight: '"HealthLink" 팀 시드 1억 5천만 원 유치, "GreenRoute" 대기업 파트너십 체결',
        materials: [
          { title: '2025 Fall Demo Day 피칭 영상 모음', type: 'Video' },
          { title: '참가팀 소개 브로셔', type: 'PDF' },
        ],
      },
      {
        season: '2025 Spring Demo Day',
        date: '2025년 6월 13일',
        teams: 7,
        participants: 0,
        highlight: '최초 해외 VC(싱가포르 소재) 참석, 글로벌 네트워킹 기회 확대',
        materials: [
          { title: '2025 Spring Demo Day 자료집', type: 'PDF' },
          { title: '투자자 네트워킹 후기', type: 'PDF' },
        ],
      },
      {
        season: '2024 Fall Demo Day',
        date: '2024년 12월 6일',
        teams: 6,
        participants: 0,
        highlight: '역대 최다 외부 투자자 참석 (38명), 현장 투자 의향서 2건',
        materials: [
          { title: '2024 Fall 피칭 자료', type: 'PDF' },
          { title: 'Demo Day 운영 가이드', type: 'PDF' },
        ],
      },
    ],
  },

  seminar: {
    id: 'seminar',
    num: '05',
    title: 'Weekly Seminar',
    subtitle: '매주 만나는 창업 인사이트',
    tags: ['매주', '오픈 세미나', '케이스 스터디'],
    featured: false,
    overview: `매주 목요일 저녁 진행되는 오픈 세미나입니다. 스타트업 트렌드, 성공·실패 케이스 스터디, 기술 창업 이슈 등을 다룹니다. POSTECH 구성원 누구나 무료로 참여할 수 있으며, 발표 자료와 녹화 영상은 사후에 공개됩니다.`,
    details: [
      { icon: '📅', label: '일정', value: '매주 목요일 오후 7시 (학기 중)' },
      { icon: '👥', label: '참가 대상', value: 'POSTECH 구성원 누구나 (사전 신청 불필요)' },
      { icon: '📍', label: '장소', value: 'POSTECH 무은재기념관 101호 + 온라인 동시 스트리밍' },
      { icon: '⏱️', label: '시간', value: '약 60–90분 (발표 50분 + Q&A 30분)' },
      { icon: '📚', label: '아카이브', value: '모든 세미나 자료·영상 Notion에 공개' },
    ],
    curriculum: [
      { week: '전반기', title: '창업 기초 시리즈', desc: '창업 결심, 팀 빌딩, 아이디어 검증, 자금 조달 기초' },
      { week: '중반기', title: '산업별 케이스 스터디', desc: 'AI, 헬스케어, 클린테크, 딥테크 창업 사례 분석' },
      { week: '후반기', title: '창업가 초청 토크', desc: '실제 창업가 경험담, 실패와 피벗 이야기' },
    ],
    events: [
      {
        season: '2025 Spring 시즌',
        date: '2025년 3월 – 6월 (15회)',
        teams: 0,
        participants: 312,
        highlight: '"AI 스타트업의 현재와 미래" 세미나 — 온·오프라인 합산 역대 최다 80명 참석',
        materials: [
          { title: '2025 Spring 전체 세미나 슬라이드 모음', type: 'Slides' },
          { title: '녹화 영상 재생목록 (YouTube)', type: 'Video' },
          { title: '추천 아티클 & 리소스 북마크', type: 'Link' },
        ],
      },
      {
        season: '2024 Fall 시즌',
        date: '2024년 9월 – 12월 (14회)',
        teams: 0,
        participants: 275,
        highlight: '게스트 스피커 제도 도입 — 외부 창업가 4인 초청, 학생 발표 비중 확대',
        materials: [
          { title: '2024 Fall 세미나 아카이브', type: 'Slides' },
          { title: '게스트 스피커 강연 영상', type: 'Video' },
        ],
      },
    ],
  },

  lab2market: {
    id: 'lab2market',
    num: '06',
    title: 'Lab to Market',
    subtitle: 'POSTECH 기술을 시장으로',
    tags: ['기술 창업', 'IP 활용', '교수 연계'],
    featured: false,
    overview: `POSTECH 연구실에서 나온 기술을 실제 시장에 연결하는 기술창업 특화 프로그램입니다. 참여를 원하는 교수·연구팀과 창업에 관심 있는 학생을 매칭하여, 기술 사업화 가능성을 함께 탐색합니다. 특허·IP 활용 방법, 기술이전 절차, R&D 창업 펀딩도 안내합니다.`,
    details: [
      { icon: '📅', label: '일정', value: '상시 매칭 + 분기별 킥오프 미팅' },
      { icon: '👥', label: '참가 대상', value: 'POSTECH 학부·대학원생, 연구실 TRL 3 이상 기술 보유팀 우선' },
      { icon: '📍', label: '지원 범위', value: 'IP 분석, 시장 조사, BM 설계, 정부과제 연계' },
      { icon: '💰', label: '연계 펀딩', value: '교육부 창업탐색 지원금 / TIPS 프리 / 포스텍 창업지원단' },
      { icon: '🎯', label: '목표', value: '기술 기반 스타트업 창업 또는 기술이전 계약 체결' },
    ],
    curriculum: [
      { week: '1단계', title: '기술-창업가 매칭', desc: '보유 기술 DB 탐색 → 관심 기술 신청 → 연구실 미팅' },
      { week: '2단계', title: '사업화 타당성 분석', desc: '시장 규모, 경쟁 현황, 기술 차별성 리포트 작성' },
      { week: '3단계', title: '사업계획서 작성', desc: '정부과제 또는 투자유치용 사업계획서 멘토링' },
      { week: '4단계', title: '론칭 & 후속 지원', desc: '창업보육센터 입주, 법인 설립 지원, 후속 프로그램 연계' },
    ],
    events: [
      {
        season: '2025년 매칭 현황',
        date: '2025년 누적',
        teams: 7,
        participants: 19,
        highlight: '"MediAI Labs" (이미징 AI 기술) 창업 성공, 중기부 TIPS 프로그램 1억 원 선정',
        materials: [
          { title: '2025 보유기술 카탈로그', type: 'PDF' },
          { title: 'IP 활용 창업 가이드북', type: 'PDF' },
          { title: '기술창업 사례 인터뷰 영상', type: 'Video' },
        ],
      },
      {
        season: '2024년 매칭 현황',
        date: '2024년 누적',
        teams: 5,
        participants: 14,
        highlight: '최초로 학부생-연구실 공동 창업팀 2팀 결성, 기술이전 계약 1건 체결',
        materials: [
          { title: '기술이전 절차 안내 자료', type: 'PDF' },
          { title: '2024 매칭 성과 보고서', type: 'PDF' },
        ],
      },
    ],
  },
};

// ── Alumni data organized by year ──
const ALUMNI_BY_YEAR = [
  {
    year: 2023,
    members: [
      {
        initials: 'LS',
        name: '이수현',
        dept: '컴퓨터공학과 석사',
        company: 'Kakao Ventures',
        role: 'Associate',
        program: 'Mentor Connect · Weekly Seminar',
        quote: '창업을 직접 하진 않았지만 VC로서 스타트업을 보는 눈을 APGC-Lab에서 길렀습니다.',
      },
      {
        initials: 'HM',
        name: '한민준',
        dept: '기계공학과 학부',
        company: 'SpaceTech Korea',
        role: 'Co-Founder & CTO',
        program: 'Idea Hackathon 2022 대상',
        quote: 'Idea Hackathon에서 만난 팀원들과 우주항공 스타트업을 창업했습니다. 현재 정부 과제 수주 성공.',
      },
      {
        initials: 'NK',
        name: '남기철',
        dept: '화학공학과 학부',
        company: 'LG Energy Solution',
        role: 'Open Innovation 담당',
        program: 'Startup Bootcamp 2022 Fall',
        quote: '부트캠프에서 배운 린 스타트업 방법론을 대기업 이노베이션 업무에 그대로 적용하고 있습니다.',
      },
    ],
  },
  {
    year: 2022,
    members: [
      {
        initials: 'KJ',
        name: '김지훈',
        dept: '전자전기공학과 학부',
        company: 'TechBridge Inc.',
        role: 'Co-Founder & CEO',
        program: 'Startup Bootcamp 2021 · Demo Day 투자 유치',
        quote: 'APGC-Lab에서의 경험이 창업의 토대가 됐습니다. 지금의 회사는 여기서 만난 팀원들과 함께 시작했어요.',
      },
      {
        initials: 'YS',
        name: '윤서연',
        dept: '산업경영공학과 학부',
        company: 'Samsung Next',
        role: 'Startup Partner',
        program: 'Mentor Connect · Idea Hackathon',
        quote: '멘토 연결 프로그램을 통해 만난 분의 소개로 현재 직장을 얻었습니다. 네트워크의 힘을 실감했어요.',
      },
      {
        initials: 'JH',
        name: '정현우',
        dept: '생명과학과 박사',
        company: 'BioFront',
        role: 'Founder & CSO',
        program: 'Lab to Market 1기',
        quote: '연구실 기술을 Lab to Market을 통해 사업으로 연결했습니다. 실험실 밖 세상을 처음 알게 된 계기였어요.',
      },
    ],
  },
  {
    year: 2021,
    members: [
      {
        initials: 'PJ',
        name: '박지은',
        dept: '환경공학과 학부',
        company: 'GreenSync',
        role: 'Founder & CTO',
        program: 'Startup Bootcamp 2020 · Demo Day 최우수팀',
        quote: '아이디어만 있었는데, APGC-Lab이 실제 사업으로 만드는 방법을 가르쳐줬습니다. 현재 시리즈A 투자 유치 완료.',
      },
      {
        initials: 'BS',
        name: '배수진',
        dept: '컴퓨터공학과 학부',
        company: 'Naver Cloud',
        role: 'Software Engineer',
        program: 'Idea Hackathon 2020 · Weekly Seminar',
        quote: '창업은 안 했지만 APGC-Lab에서 만난 인연들이 커리어 내내 든든한 네트워크가 되어주고 있습니다.',
      },
    ],
  },
  {
    year: 2020,
    members: [
      {
        initials: 'CW',
        name: '최우진',
        dept: '의과학대학원 석사',
        company: 'MediAI Labs',
        role: 'Co-Founder & CEO',
        program: 'Lab to Market · Startup Bootcamp 창립 멤버',
        quote: 'POSTECH 의료 AI 기술을 사업화하는 Lab to Market 덕분에 현재의 의료 스타트업을 창업할 수 있었습니다.',
      },
      {
        initials: 'LJ',
        name: '임재원',
        dept: '물리학과 학부',
        company: 'Kakao Brain',
        role: 'AI Research Engineer',
        program: 'Startup Bootcamp 창립 멤버',
        quote: 'APGC-Lab 창립 멤버로서 처음 씨앗을 심었습니다. 지금의 활발한 모습을 보면 정말 뿌듯합니다.',
      },
    ],
  },
];
