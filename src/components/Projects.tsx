import { projects } from '../data/profile';
import ProjectCard from './ProjectCard';

const companyGroups = [
  {
    company: '메타넷디지털 주식회사',
    title: '메타넷디지털',
    summary: '총 1년 3개월, 재직중',
    description:
      'DevOps 운영 파트에서 Linux, Kubernetes, Kafka 운영과 CI/CD 자동화, AI Infra 및 RAG PoC를 담당했습니다.',
  },
  {
    company: '대신정보통신',
    title: '대신정보통신',
    summary: '총 3년 5개월',
    description:
      '서울특별시데이터센터 인프라 구축을 중심으로 VMware, SAN Storage, RHEL 및 CentOS 서버, 물리 인프라 운영 지원 경험을 쌓았습니다.',
  },
  {
    company: 'AWS Cloud School',
    title: '교육 프로젝트',
    summary: '2024.08 ~ 2025.03, 7개월, 1050시간',
    description:
      'Amazon AWS & MSA 환경 실무 교육에서 Kubernetes 자동화 배포, Private Registry 운영, GitLab CI/CD를 실습했습니다.\nAWS 아키텍처 설계와 Prometheus/Grafana/Loki 기반 모니터링 환경 구축까지 다뤘습니다.',
    topics: [
      'Kubernetes',
      'Ansible',
      'Docker',
      'Linux',
      'GitLab CI/CD',
      'AWS Cloud',
      'Database',
      'Monitoring',
    ],
  },
];

export default function Projects() {
  return (
    <section id="experience" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-10">
          <h2 className="inline-block border-b-2 border-signal-cyan pb-3 text-3xl font-extrabold text-signal-cyan sm:text-5xl">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {companyGroups.map((group) => {
            const groupProjects = projects.filter((project) => project.company === group.company);
            const isDaeshinProject = group.company === '대신정보통신';
            const isEducationProject = group.company === 'AWS Cloud School';
            const groupClassName = [
              isDaeshinProject ? 'daeshin-project-group' : '',
              isEducationProject ? 'education-project-group' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <section
                key={group.company}
                className={`${groupClassName ? `${groupClassName} ` : ''}rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[1.75rem] sm:p-7`}
              >
                <div className="mb-5 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:mb-7 sm:pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-base font-extrabold text-signal-cyan sm:text-lg">{group.summary}</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-4xl">{group.title}</h3>
                    <p className="mt-3 max-w-4xl whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{group.description}</p>
                    {'topics' in group && group.topics ? (
                      <div className="education-topic-list mt-4 flex flex-wrap gap-2">
                        {group.topics.map((topic) => (
                          <span key={topic} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  {groupProjects.map((project) => {
                    const shouldStartNewPdfPage =
                      (group.company === '메타넷디지털 주식회사' &&
                        project.title === '삼성 구미 디지털트윈 솔루션 챗봇 환경 구축 POC') ||
                      project.title === '2021년 서울특별시데이터센터 정보자원통합 사업';
                    const shouldUseCompactPdf =
                      project.title === '2021년 서울특별시데이터센터 정보자원통합 사업' ||
                      project.title === '에프앤가이드(주) 망분리 및 보안 솔루션 구축 사업';
                    const projectClassName = [
                      shouldStartNewPdfPage ? 'pdf-project-break-before' : '',
                      shouldUseCompactPdf ? 'pdf-compact-project' : '',
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <div key={project.title} className={projectClassName || undefined}>
                        <ProjectCard project={project} />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
