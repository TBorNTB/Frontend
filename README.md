# SSG Community Hub: 프론트엔드 개발 가이드

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-blueviolet?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=flat-square)](https://ui.shadcn.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/plusultracodes-projects/v0-ssg)

<br/>

## 1. 🚀 프로젝트 소개 (Overview)

**SSG Community Hub**는 세종대학교 정보보안 동아리(SSG) 멤버들을 위한 통합 커뮤니티 플랫폼입니다. 이 프로젝트는 멤버들의 활동 기록, 학습 자료(Write-ups), 프로젝트 관리 및 팀원 간의 소통을 증진시키는 것을 목표로 합니다.

<br/>

## 2. 🛠️ 시작하기 (Getting Started)

프로젝트를 로컬 환경에서 실행하기 위한 절차입니다.

### 2.1. 사전 요구 사항

- [Node.js](https://nodejs.org/en) (v18.18.0 이상)
- [pnpm](https://pnpm.io/installation)

### 2.2. 설치 및 실행

```bash
# 1. 저장소를 복제합니다.
git clone [저장소 URL]
cd [프로젝트 폴더]

# 2. 의존성을 설치합니다.
pnpm install

# 3. 개발 서버를 실행합니다.
pnpm dev
```

서버가 성공적으로 실행되면, 브라우저에서 `http://localhost:3000`으로 접속하여 확인할 수 있습니다.

<br/>

## 3. 🏗️ 기술 스택 (Core Technology Stack)

본 프로젝트는 다음과 같은 핵심 기술 스택을 기반으로 구축되었습니다. 각 기술의 역할을 이해하면 프로젝트에 더 쉽게 기여할 수 있습니다.

| 구분           | 기술                     | 역할 및 사용 이유                                                                                                                                        |
| :------------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **프레임워크** | **Next.js (App Router)** | SSR/SSG를 통한 뛰어난 성능, SEO 최적화, 파일 기반 라우팅 등 최신 웹 개발 패러다임을 제공합니다.                                                          |
| **UI**         | **shadcn/ui**            | Radix UI(기능)와 Tailwind CSS(스타일)를 기반으로 합니다. 필요한 컴포넌트 코드를 프로젝트에 직접 추가하여 높은 자유도와 커스터마이징 편의성을 제공합니다. |
| **인증**       | **Auth.js (NextAuth)**   | 보안 쿠키 기반의 세션 관리, 소셜 로그인, 토큰 자동 갱신(Silent Refresh) 등 복잡한 인증 로직을 안전하고 효율적으로 처리합니다.                            |
| **전역 상태**  | **Zustand**              | Redux의 복잡성을 덜어낸 가볍고 간결한 훅 기반의 전역 상태 관리 라이브러리입니다.                                                                         |
| **서버 상태**  | **TanStack Query**       | 서버 데이터의 캐싱, 동기화, 로딩/에러 상태 관리를 자동화하여 뛰어난 사용자 경험과 효율적인 데이터 통신을 구현합니다.                                     |

<br/>

## 4. 📜 프로젝트 규칙 및 컨벤션 (Conventions)

**모든 팀원은 아래 규칙을 반드시 준수해야 합니다.** 일관성 있는 코드는 프로젝트의 유지보수성과 생산성을 크게 향상시킵니다.

### 4.1. 코드 스타일 (Linter & Formatter)

- **Prettier**: 코드의 "모양"을 담당합니다. `.prettierrc.json`에 정의된 규칙에 따라 코드가 자동으로 포맷팅됩니다.
- **ESLint**: 코드의 "품질"을 담당합니다. 잠재적 버그 및 안티 패턴을 검사합니다.
- **자동화**: `Husky`와 `lint-staged`를 통해 **커밋 시 자동으로 코드 검사 및 수정이 실행**됩니다. 별도의 포맷팅 작업을 할 필요 없이, 코드를 작성하고 커밋만 하면 됩니다.

### 4.2. 폴더 구조

```
src
├── app/                  # 라우팅 단위의 페이지 (서버/클라이언트 컴포넌트)
├── components/           # 재사용 가능한 모든 컴포넌트
│   ├── ui/               # (shadcn/ui) Button, Card 등 원자 단위의 UI
│   ├── common/           # Header, Footer 등 공통 레이아웃
│   └── features/         # 특정 기능/도메인에 종속된 컴포넌트 (예: project-list)
├── lib/                  # 전역 유틸리티 함수 (예: cn, api 인스턴스)
├── hooks/                # 커스텀 훅 (예: use-user)
├── store/                # Zustand 전역 상태 관리 스토어
└── types/                # 전역 TypeScript 타입 정의
```

### 4.3. 네이밍 컨벤션

- **파일**: `kebab-case.tsx` (예: `project-list.tsx`)
- **컴포넌트, 타입/인터페이스**: `PascalCase` (예: `ProjectList`, `interface ProjectData`)
- **변수, 함수**: `camelCase` (예: `const projectData`, `function getProjects()`)

### 4.4. 절대 경로 임포트

- 모든 임포트는 `tsconfig.json`의 `paths` 설정을 기반으로 한 절대 경로를 사용합니다.
- **(O)** `import { Button } from '@/components/ui/button';`
- **(X)** `import { Button } from '../../../components/ui/button';`

<br/>

## 5. 🌿 Git 협업 워크플로우

체계적인 브랜치 관리와 커밋 메시지는 협업의 효율을 극대화합니다.

### 5.1. 브랜치 전략

- `main`: **배포용** 브랜치. 오직 `develop` 브랜치에서만 병합(Merge)합니다.
- `develop`: **개발의 중심**이 되는 브랜치. 모든 `feature` 브랜치가 이곳으로 합쳐집니다.
- **기능 개발**: `feature/기능-요약` (예: `feature/user-authentication`)
- **버그 수정**: `fix/버그-요약` (예: `fix/login-button-error`)

### 5.2. 커밋 메시지 컨벤션

[**Conventional Commits**](https://www.conventionalcommits.org/) 규칙을 따릅니다. 커밋 메시지는 팀의 소중한 역사 기록입니다.

| 타입       | 설명                                      | 예시                                      |
| :--------- | :---------------------------------------- | :---------------------------------------- |
| `feat`     | 새로운 기능 추가                          | `feat: Add user login page`               |
| `fix`      | 버그 수정                                 | `fix: Correct button alignment issue`     |
| `docs`     | 문서 변경 (README 등)                     | `docs: Update setup instructions`         |
| `style`    | 코드 포맷팅, 세미콜론 등 (기능 변경 없음) | `style: Apply prettier to all files`      |
| `refactor` | 코드 리팩토링                             | `refactor: Simplify getProjects function` |
| `test`     | 테스트 코드 추가/수정                     | `test: Add button component tests`        |
| `chore`    | 빌드, 패키지 매니저 설정 등 자잘한 작업   | `chore: Upgrade Next.js to 15.2.4`        |

### 5.3. Pull Request (PR) 프로세스

1. 기능 개발/버그 수정이 완료되면 `develop` 브랜치를 대상으로 PR을 생성합니다.
2. PR 제목은 커밋 메시지 컨벤션을 따릅니다.
3. PR 본문에는 `.github/pull_request_template.md` 템플릿에 따라 변경 사항, 테스트 방법, 스크린샷 등을 상세히 기재합니다.
4. **최소 1명 이상의 팀원에게 코드 리뷰**를 받고 `Approve`를 받아야 병합할 수 있습니다.

<br/>

## 6. 📜 주요 스크립트 (Scripts)

`package.json`에 정의된 주요 스크립트입니다.

- `pnpm dev`: 개발 서버를 실행합니다.
- `pnpm build`: 프로덕션용으로 프로젝트를 빌드합니다.
- `pnpm start`: 빌드된 프로덕션 서버를 실행합니다.
- `pnpm lint`: ESLint로 코드 품질을 검사합니다.
