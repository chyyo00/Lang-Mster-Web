# Lang Master

C++, Java, Python 세 언어를 쉬움 → 보통 → 어려움 → 전문가 4단계 커리큘럼으로 학습하는 웹 플랫폼입니다.

## Tech Stack

- TypeScript + React
- Vite
- React Router
- Tailwind CSS v4
- Radix UI (Tabs, Accordion, Progress)
- lucide-react (아이콘)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — 개발 서버 실행
- `npm run build` — 타입 체크 후 프로덕션 빌드
- `npm run lint` — oxlint 실행
- `npm run preview` — 빌드 결과 미리보기

## 구조

- `src/data` — 언어/난이도 메타데이터 및 문제 콘텐츠
- `src/components` — 재사용 UI 컴포넌트 (Navbar, ProgressBar, DifficultyBadge, CodeBlock)
- `src/pages` — Home / LanguagePage / ProblemPage
- `src/lib/useProgress.ts` — localStorage 기반 학습 진행률 추적 훅
