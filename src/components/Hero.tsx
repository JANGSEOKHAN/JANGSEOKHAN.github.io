import { ArrowDown, BookOpen, ExternalLink, Github, Server, Workflow } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';

const visualSlots = [
  {
    key: 'profile-photo',
    type: 'photo',
  },
  {
    key: 'architecture',
    title: 'Architecture',
    description: 'CI/CD · Kubernetes',
    type: 'placeholder',
    icon: Workflow,
  },
  {
    key: 'operations',
    title: 'Operations',
    description: 'Kafka · AI Infra',
    type: 'placeholder',
    icon: Server,
  },
] as const;

export default function Hero() {
  const [isPhotoVisible, setIsPhotoVisible] = useState(true);
  const githubLabel = profile.githubUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const blogLabel = profile.notesUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <section id="home" className="relative overflow-hidden bg-grid-radial pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-glow sm:rounded-[1.75rem] sm:p-8 lg:p-10">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[11rem_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[9rem] sm:max-w-[12rem] lg:mx-0">
              <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {visualSlots.map((slot) => {
                  return (
                    <article key={slot.key} className="min-w-full snap-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      {slot.type === 'photo' ? (
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                          {isPhotoVisible ? (
                            <img
                              src={profile.photoUrl}
                              alt={`${profile.nameKo} 증명사진`}
                              className="aspect-[3/4] w-full origin-center scale-[1.035] object-cover"
                              decoding="async"
                              onError={() => setIsPhotoVisible(false)}
                            />
                          ) : (
                            <div className="flex aspect-[3/4] w-full items-center justify-center bg-slate-100 text-2xl font-semibold text-slate-400">
                              JSH
                            </div>
                          )}
                        </div>
                      ) : (
                        (() => {
                          const Icon = slot.icon;

                          return (
                            <div className="flex aspect-[3/4] w-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-signal-cyan shadow-sm">
                                <Icon aria-hidden="true" size={22} />
                              </span>
                              <div>
                                <p className="text-lg font-extrabold text-slate-950">{slot.title}</p>
                                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{slot.description}</p>
                              </div>
                            </div>
                          );
                        })()
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0">
              <p className="inline-flex max-w-full rounded-full border border-signal-cyan/20 bg-sky-50 px-3 py-2 text-xs font-bold text-signal-cyan sm:px-4 sm:text-sm">
                {profile.tagLine}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold text-slate-950 sm:mt-6 sm:text-6xl lg:text-7xl">{profile.nameKo}</h1>
              <p className="mt-4 break-keep text-xl font-bold text-slate-800 sm:mt-5 sm:text-3xl">{profile.role}</p>
              <p className="mt-4 max-w-3xl break-keep text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">{profile.headline}</p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                <a
                  href="#experience"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-signal-cyan px-5 py-3 text-sm font-semibold text-white shadow-sm outline-none transition hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2 focus-visible:ring-white sm:w-auto"
                >
                  경력기술 보기
                  <ArrowDown aria-hidden="true" size={17} />
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full max-w-full min-w-0 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none transition hover:border-signal-green/60 hover:text-signal-green focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2 focus-visible:ring-white sm:w-auto"
                >
                  <Github aria-hidden="true" size={17} />
                  <span className="break-all">{githubLabel}</span>
                  <ExternalLink aria-hidden="true" size={14} />
                </a>
                <a
                  href={profile.notesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full max-w-full min-w-0 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none transition hover:border-signal-cyan/60 hover:text-signal-cyan focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2 focus-visible:ring-white sm:w-auto"
                >
                  <BookOpen aria-hidden="true" size={17} />
                  <span className="break-all">{blogLabel}</span>
                  <ExternalLink aria-hidden="true" size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
