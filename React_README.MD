# SlimHealth 프론트엔드

SlimHealth의 건강 데이터를 입력하고, 예측 결과와 개선 가이드를 확인하는 웹 애플리케이션입니다. 이 프로젝트는 React 기반 **Next.js App Router** 애플리케이션입니다.

## 기술 스택

- Next.js 16 (App Router)
- React 19, TypeScript
- Axios
- TanStack React Query
- ECharts (`echarts-for-react`)
- Zustand
- Storybook
- ESLint, Plop

## 주요 기능

- 회원가입 및 로그인
- 건강 데이터 입력, 수정 및 이력 조회
- 건강 예측 결과 및 분석 조회
- 예측 결과 요약과 개선 가이드 표시
- Storybook으로 확인할 수 있는 공통 UI 컴포넌트

## 폴더 구조

```text
.
├─ public/                     # 정적 파일
├─ plop-templates/             # 컴포넌트 생성 템플릿
├─ src/
│  ├─ api/                     # Axios 설정 및 API 요청 모듈
│  ├─ app/                     # Next.js App Router 레이아웃과 페이지
│  │  ├─ (main)/                # 메인 화면 라우트 그룹
│  │  └─ (app)/                 # 로그인, 가입, 건강 데이터 및 예측 라우트 그룹
│  ├─ assets/                  # 이미지 리소스
│  ├─ components/              # 재사용 UI 컴포넌트와 Storybook 스토리
│  ├─ context/                 # React Context
│  ├─ enums/                   # 열거형
│  ├─ features/                # 사용자 및 건강 기능별 API 훅
│  ├─ model/                   # 사용자 및 건강 데이터 모델
│  ├─ provider/                # 앱 전역 Provider
│  ├─ stores/                  # Zustand 상태 저장소
│  └─ utils/                   # 공통 유틸리티와 경로 정의
├─ .env.local                  # 로컬 환경 변수 (직접 생성)
├─ package.json                # 의존성 및 스크립트
└─ next.config.ts              # Next.js 설정
```

`src/app`의 괄호 폴더는 라우트 그룹으로 URL 경로에는 포함되지 않습니다. 각 `page.tsx`가 경로를 만들고, `layout.tsx`가 해당 영역의 공통 레이아웃을 정의합니다.

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 API 서버 주소를 지정합니다.

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

클라이언트에서 API 주소를 사용하므로 변수 이름에 `NEXT_PUBLIC_` 접두사가 필요합니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

기본 주소 `http://localhost:3000`에서 앱을 확인할 수 있습니다.

## 사용 가능한 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Next.js 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run start` | 빌드된 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |
| `npm run storybook` | Storybook 개발 서버 실행 |
| `npm run build-storybook` | Storybook 정적 빌드 생성 |
| `npm run generate` | Plop 컴포넌트 생성기 실행 |

컴포넌트를 생성하려면 `npm run generate`를 실행한 뒤 프롬프트에 이름을 입력합니다.

## 라우팅

라우트는 `src/app`의 App Router 파일 구조로 관리합니다.

| 경로 | 페이지 |
| --- | --- |
| `/` | 메인 |
| `/login` | 로그인 |
| `/join` | 회원가입 |
| `/dataInput` | 건강 데이터 입력 |
| `/dataUpdate` | 건강 데이터 수정 |
| `/prediction` | 건강 예측 결과 |
| `/dataInputHistory` | 건강 데이터 입력 이력 |

## API 연동

API 코드는 `src/api`에서 관리합니다.

- `axios.ts`: Axios 인스턴스, 인증 헤더 및 토큰 재발급 처리
- `userApi.ts`: 사용자 인증 관련 API
- `healthDataApi.ts`: 건강 데이터 관련 API

API 기본 주소는 `.env.local`의 `NEXT_PUBLIC_API_URL`을 사용합니다. 로그인 정보는 현재 브라우저의 `localStorage`에 저장되며, API 요청에 Access Token을 전달하고 인증 오류가 발생하면 Refresh Token으로 재발급을 시도합니다.

## 컴포넌트 개발

공통 UI 컴포넌트는 `src/components` 아래에 컴포넌트별 폴더로 둡니다. 현재 파일 형식은 TypeScript와 TSX입니다.

```text
src/components/ComponentName/
├─ ComponentName.tsx
├─ ComponentName.css
├─ ComponentName.stories.tsx
└─ index.ts
```

`npm run generate`로 생성하면 컴포넌트, CSS, Storybook 스토리, `index.ts`가 만들어집니다.
