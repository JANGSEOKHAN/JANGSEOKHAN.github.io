import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Project } from '../data/profile';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visuals = project.visuals ?? [];
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeVisual = visuals[activeVisualIndex];
  const modalVisual = modalIndex === null ? null : visuals[modalIndex];
  const hasMultipleVisuals = visuals.length > 1;

  const showPreviousVisual = () => {
    if (visuals.length === 0) return;
    setActiveVisualIndex((currentIndex) => (currentIndex - 1 + visuals.length) % visuals.length);
  };

  const showNextVisual = () => {
    if (visuals.length === 0) return;
    setActiveVisualIndex((currentIndex) => (currentIndex + 1) % visuals.length);
  };

  const showPreviousModalVisual = () => {
    if (modalIndex === null || visuals.length === 0) return;
    setModalIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex - 1 + visuals.length) % visuals.length;
    });
  };

  const showNextModalVisual = () => {
    if (modalIndex === null || visuals.length === 0) return;
    setModalIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + 1) % visuals.length;
    });
  };

  useEffect(() => {
    setActiveVisualIndex(0);
    setModalIndex(null);
  }, [project.title]);

  useEffect(() => {
    if (modalIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        setModalIndex((currentIndex) => {
          if (currentIndex === null || visuals.length === 0) return currentIndex;
          return (currentIndex - 1 + visuals.length) % visuals.length;
        });
      }

      if (event.key === 'ArrowRight') {
        setModalIndex((currentIndex) => {
          if (currentIndex === null || visuals.length === 0) return currentIndex;
          return (currentIndex + 1) % visuals.length;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIndex, visuals.length]);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div>
        <div>
          <p className="mb-2 text-xs font-extrabold text-signal-cyan sm:text-sm">PROJECT</p>
          <h3 className="break-keep text-xl font-semibold leading-7 text-slate-950 sm:text-2xl sm:leading-8">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">{project.period}</span>
            <span className="rounded-md bg-signal-green/10 px-3 py-1.5 text-sm font-semibold text-signal-green">{project.mainRole}</span>
          </div>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{project.overview}</p>
        </div>
      </div>

      {activeVisual ? (
        <section className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold text-slate-950">이미지 / 자료</h4>
            <p className="text-xs font-semibold text-slate-400">
              {activeVisualIndex + 1} / {visuals.length}
            </p>
          </div>
          {project.visualNote ? (
            <p className="mb-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium leading-6 text-slate-500">
              {project.visualNote}
            </p>
          ) : null}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-4">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => activeVisual.imageUrl && setModalIndex(activeVisualIndex)}
                disabled={!activeVisual.imageUrl}
                className="block w-full cursor-zoom-in outline-none disabled:cursor-default focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2"
                aria-label={`${activeVisual.title} 크게 보기`}
              >
                {activeVisual.imageUrl ? (
                  <img
                    src={activeVisual.imageUrl}
                    alt={activeVisual.alt ?? activeVisual.title}
                    className="aspect-[4/3] w-full object-contain p-1.5 sm:aspect-video sm:p-3"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center text-sm font-bold text-slate-400">
                    Image Slot {activeVisualIndex + 1}
                  </div>
                )}
              </button>

              {hasMultipleVisuals ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousVisual}
                    className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm outline-none transition hover:border-signal-cyan hover:text-signal-cyan focus-visible:ring-2 focus-visible:ring-signal-cyan sm:left-3 sm:h-10 sm:w-10"
                    aria-label="이전 이미지 보기"
                  >
                    <ChevronLeft aria-hidden="true" size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextVisual}
                    className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm outline-none transition hover:border-signal-cyan hover:text-signal-cyan focus-visible:ring-2 focus-visible:ring-signal-cyan sm:right-3 sm:h-10 sm:w-10"
                    aria-label="다음 이미지 보기"
                  >
                    <ChevronRight aria-hidden="true" size={22} />
                  </button>
                </>
              ) : null}
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-extrabold text-slate-950 sm:text-base">{activeVisual.title}</h5>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 sm:text-sm sm:leading-6">{activeVisual.description}</p>
            </div>
          </div>
        </section>
      ) : null}

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:mt-6 sm:p-4">
        <h4 className="text-sm font-semibold text-signal-green">상세 수행 내용</h4>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {project.detailSections.map((section) => (
            <div key={section.title} className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-sm font-bold text-slate-950 sm:text-base">{section.title}</p>
              <ul className="mt-2 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {project.result ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 sm:p-4">
          <h4 className="text-sm font-semibold text-signal-amber">Result</h4>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{project.result}</p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700">
            {tech}
          </span>
        ))}
      </div>

      {modalVisual ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-2 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalVisual.title} 확대 이미지`}
          onClick={() => setModalIndex(null)}
        >
          <div className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-white p-2 shadow-2xl sm:p-4" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setModalIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-signal-cyan"
              aria-label="확대 이미지 닫기"
            >
              <X aria-hidden="true" size={22} />
            </button>

            <div className="flex max-h-[70vh] items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:max-h-[78vh]">
              {modalVisual.imageUrl ? (
                <img
                  src={modalVisual.imageUrl}
                  alt={modalVisual.alt ?? modalVisual.title}
                  className="max-h-[70vh] w-full object-contain sm:max-h-[78vh]"
                  decoding="async"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center text-sm font-bold text-slate-400">
                  Image Slot {(modalIndex ?? 0) + 1}
                </div>
              )}
            </div>

            <div className="mt-3 pr-12 sm:mt-4">
              <p className="text-base font-extrabold text-slate-950 sm:text-lg">{modalVisual.title}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 sm:text-sm sm:leading-6">{modalVisual.description}</p>
            </div>

            {hasMultipleVisuals ? (
              <>
                <button
                  type="button"
                  onClick={showPreviousModalVisual}
                  className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/80 text-white outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-signal-cyan sm:left-5 sm:h-11 sm:w-11"
                  aria-label="이전 확대 이미지 보기"
                >
                  <ChevronLeft aria-hidden="true" size={24} />
                </button>
                <button
                  type="button"
                  onClick={showNextModalVisual}
                  className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/80 text-white outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-signal-cyan sm:right-5 sm:h-11 sm:w-11"
                  aria-label="다음 확대 이미지 보기"
                >
                  <ChevronRight aria-hidden="true" size={24} />
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
