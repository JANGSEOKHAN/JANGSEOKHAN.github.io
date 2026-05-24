import { projects } from '../data/profile';
import ProjectCard from './ProjectCard';

const companyGroups = [
  {
    company: '메타넷디지털 주식회사',
    title: '메타넷디지털',
    summary: '총 1년 2개월 · 재직중',
    description:
      'DevOps 운영 파트에서 Linux/Kubernetes/Kafka/CI/CD 운영과 AI Infra/RAG PoC를 담당했습니다.',
  },
  {
    company: '대신정보통신',
    title: '대신정보통신',
    summary: '총 3년 5개월',
    description:
      '서울특별시데이터센터 인프라 구축과 VMware/SAN, RHEL/CentOS, 물리 인프라 운영 지원 경험을 쌓았습니다.',
  },
  {
    company: 'AWS Cloud School',
    title: '교육 프로젝트',
    summary: '2024.08 ~ 2025.03 · 1050시간',
    description:
      'Amazon AWS & MSA 환경 실무 교육에서 Kubernetes 자동화 배포, Private Registry, GitLab CI/CD, AWS 아키텍처 설계, 모니터링 환경 구축을 실습했습니다.',
    topics: [
      'Kubernetes',
      'Ansible',
      'GitLab CI/CD',
      'AWS Cloud',
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

            return (
              <section key={group.company} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[1.75rem] sm:p-7">
                <div className="mb-5 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:mb-7 sm:pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-base font-extrabold text-signal-cyan sm:text-lg">{group.summary}</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-4xl">{group.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{group.description}</p>
                    {'topics' in group && group.topics ? (
                      <div className="mt-4 flex flex-wrap gap-2">
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
                  {groupProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
