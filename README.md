# 장석한 Infrastructure / DevOps Portfolio

GitHub Pages에 배포할 수 있는 한국어 인프라/DevOps 엔지니어 포트폴리오입니다. Vite + React + TypeScript + Tailwind CSS 기반의 정적 사이트이며, 개인정보 노출을 줄이기 위해 경력 콘텐츠는 공개 가능한 범위로 익명화했습니다.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

기본 개발 서버는 Vite가 안내하는 로컬 주소에서 확인할 수 있습니다.

## Build

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## GitHub Pages Deployment

`.github/workflows/deploy.yml`은 `main` 브랜치에 push될 때 다음 순서로 실행됩니다.

1. `npm ci`
2. `npm run build`
3. `dist/` 업로드
4. GitHub Pages 배포

GitHub 저장소 설정에서 Pages 소스를 `GitHub Actions`로 지정하세요.

### Vite base 설정

`vite.config.ts`의 `base`는 현재 `/`로 설정되어 있습니다.

- 저장소 이름이 `<github-id>.github.io`이면 그대로 둡니다.
- 일반 프로젝트 저장소라면 예를 들어 `infra-devops-portfolio` 기준으로 `base: "/infra-devops-portfolio/"`로 변경합니다.

## Updating Profile Data

경력, 프로젝트, 스킬, 교육, 연락처 데이터는 `src/data/profile.ts`에서 관리합니다. 문구 수정 시 컴포넌트 파일보다 이 데이터 파일을 먼저 확인하세요.

GitHub Pages는 정적 사이트라 배포된 페이지에서 입력한 내용을 저장하는 관리자 기능은 없습니다. 내용을 바꾸려면 `src/data/profile.ts`를 수정한 뒤 다시 배포하면 됩니다.

## Privacy Checklist Before Publishing

- [ ] 전화번호가 포함되어 있지 않은지 확인
- [ ] 상세 주소가 포함되어 있지 않은지 확인
- [ ] 생년월일, 연봉, 병역 정보가 포함되어 있지 않은지 확인
- [ ] 원본 이력서 PDF가 포함되어 있지 않은지 확인
- [ ] 내부 IP, 도메인, 서버명, 클러스터명, 계정명, 보안 정책 상세값이 없는지 확인
- [ ] 고객사명과 프로젝트명이 공개 가능한지 확인
- [ ] 공개가 애매한 프로젝트명은 익명화했는지 확인

## TODO

- [x] GitHub URL 입력
- [x] Velog 블로그 링크 입력
- [x] 공개용 이메일 링크 제거
- [ ] 공개 가능한 프로젝트명 최종 검토
- [ ] LinkedIn 또는 Notion 링크를 공개할지 검토
