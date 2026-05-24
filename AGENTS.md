# AGENTS.md

## Project goal

This repository is a public GitHub Pages portfolio for an Infrastructure / DevOps Engineer.

## Language

- Main content must be Korean.
- Technical keywords may remain in English.
- Tone should be professional, concise, and suitable for experienced infrastructure/DevOps roles.

## Privacy rules

Never include:
- phone number
- detailed address
- birth date
- salary
- military details
- raw resume PDF containing personal information
- internal IPs, hostnames, domains, cluster names, credentials, account names
- confidential client information
- private repository names

When client/project confidentiality is unclear, anonymize names:
- "대기업 제조 DX 프로젝트"
- "공공 데이터센터 인프라 구축 사업"
- "제조 장비 매뉴얼 RAG PoC"

## Design direction

- Do not copy code or assets from reference websites.
- Use the reference only for section structure and portfolio tone.
- Dark theme, clean layout, card-based sections, timeline, badges, architecture diagrams.
- Emphasize Infrastructure, DevOps, Kubernetes, CI/CD, Kafka, VMware, AWS, AI Infra/RAG.

## Code quality

- Use Vite + React + TypeScript + Tailwind CSS.
- Keep all career content in `src/data/profile.ts`.
- Components should be small and reusable.
- Site must be responsive.
- Run build before final response.
- Do not add unnecessary dependencies.

## Deployment

- Target GitHub Pages.
- Include GitHub Actions workflow for build and deploy.
- README must explain:
  - local development
  - build
  - GitHub Pages deployment
  - how to update profile data
  - privacy checklist before publishing
