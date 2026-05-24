import { experiences } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="운영과 구축을 함께 다룬 경력 흐름"
          description="프로젝트명은 공개 가능한 수준으로 익명화했고, 세부 성과는 민감정보를 제외해 정리했습니다."
        />

        <div className="mt-12 space-y-8 border-l border-white/10 pl-5 sm:pl-8">
          {experiences.map((item) => (
            <article key={item.company} className="relative rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <span className="absolute -left-[2.1rem] top-7 h-4 w-4 rounded-full border-4 border-base-950 bg-signal-cyan sm:-left-[2.6rem]" />
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-semibold text-signal-cyan">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-base-850 px-3 py-1 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{item.summary}</p>

              <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h4 className="text-sm font-semibold text-white">공개용 프로젝트명</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.publicProjectNames.map((projectName) => (
                      <span key={projectName} className="rounded-md bg-signal-amber/10 px-3 py-2 text-xs font-medium text-signal-amber">
                        {projectName}
                      </span>
                    ))}
                  </div>

                  <h4 className="mt-6 text-sm font-semibold text-white">핵심 역할</h4>
                  <ul className="mt-3 space-y-2">
                    {item.coreRoles.map((role) => (
                      <li key={role} className="text-sm leading-6 text-slate-300">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">세부 성과</h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="rounded-md border border-white/10 bg-base-900/75 px-3 py-2 text-sm leading-6 text-slate-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
