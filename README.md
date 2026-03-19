# APGC-Lab 홈페이지

POSTECH 창업 학생단체 **APGC-Lab(Aspiring Pioneers & Growth Catalyst Lab)** 의 공식 홈페이지입니다.

## 구조

```
ApgcLabPage/
├── index.html      # 메인 페이지
├── program.html    # 프로그램 상세 페이지 (URL 파라미터로 동적 렌더링)
├── style.css       # 메인 스타일시트
├── program.css     # 프로그램 상세 페이지 전용 스타일
├── data.js         # 프로그램 및 동문 데이터
├── main.js         # 메인 페이지 스크립트
└── program.js      # 프로그램 상세 페이지 스크립트
```

## 페이지 구성

### 메인 페이지 (`index.html`)
| 섹션 | 설명 |
|------|------|
| **Hero** | 단체 소개, 주요 통계 (멤버 수·프로젝트·투자 유치) |
| **About Us** | 미션, 비전, 핵심 가치 |
| **Programs** | 6개 프로그램 카드 — 클릭 시 상세 페이지로 이동 |
| **Alumni** | 연도별 타임라인 (2020–2023) |
| **Contact** | 문의 폼 및 연락처 |

### 프로그램 상세 페이지 (`program.html?id=<프로그램ID>`)
| 프로그램 ID | 이름 |
|-------------|------|
| `bootcamp` | Startup Bootcamp |
| `hackathon` | Idea Hackathon |
| `mentor` | Mentor Connect |
| `demoday` | Demo Day |
| `seminar` | Weekly Seminar |
| `lab2market` | Lab to Market |

각 상세 페이지는 프로그램 소개, 커리큘럼, 지난 행사 기록(자료 아카이브 포함)으로 구성됩니다.

## 실행 방법

별도 빌드 과정 없이 `index.html`을 브라우저에서 바로 열면 됩니다.

```bash
open index.html
```

로컬 서버가 필요한 경우:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx 필요)
npx serve .
```

## 배포 (GitHub Pages)

1. GitHub에 저장소 생성 후 Push
2. 저장소 Settings → Pages → Branch: `main` / `/ (root)` 선택 → Save
3. `https://<username>.github.io/<repo>/` 로 접속

## 콘텐츠 수정

모든 프로그램 데이터와 동문 데이터는 **`data.js`** 에 집중 관리됩니다.

- 프로그램 정보 수정: `PROGRAMS` 객체
- 동문 추가/수정: `ALUMNI_BY_YEAR` 배열 (연도 내림차순 유지)

## 디자인 컬러

| 변수 | 값 | 용도 |
|------|----|------|
| `--green` | `#00ED97` | 주요 강조색 |
| `--teal` | `#00E8BB` | 보조 강조색 |
| `--cyan` | `#00E0E0` | 그라디언트 끝색 |
| `--dark` | `#0a0f1a` | 기본 배경 |
| `--card` | `#161e2e` | 카드 배경 |
