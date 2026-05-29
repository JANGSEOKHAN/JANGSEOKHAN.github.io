import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';
import type { Project } from '../data/profile';

type ProjectCardProps = {
  project: Project;
};

type VideoTime = {
  current: number;
  duration: number;
};

const initialVideoTime: VideoTime = {
  current: 0,
  duration: 0,
};

const formatMediaTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return '00:00';
  }

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const readVideoTime = (event: SyntheticEvent<HTMLVideoElement>): VideoTime => {
  const video = event.currentTarget;
  const duration = Number.isFinite(video.duration) ? video.duration : 0;

  return {
    current: video.currentTime,
    duration,
  };
};

const visualNoteHighlights = [
  '공식 홈페이지/브로셔 제공 자료',
  '보안상 더미데이터로 재구성한 화면',
  '보안상 실제 시스템명, 계정, IP 등은 제거 또는 블러 처리',
  '직접 설계',
  '(메타넷 공식 홈페이지에서 제공된 예시 이미지)',
  '(사진은 엑셈원 브로셔 제공 자료)',
];

const renderHighlightedText = (note: string) => {
  const pattern = new RegExp(`(${visualNoteHighlights.map((text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

  return note.split(pattern).map((part, index) => {
    if (visualNoteHighlights.includes(part)) {
      return (
        <strong key={`${part}-${index}`} className="font-extrabold text-slate-800">
          {part}
        </strong>
      );
    }

    return part;
  });
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visuals = project.visuals ?? [];
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalVideoTime, setModalVideoTime] = useState<VideoTime>(initialVideoTime);

  const modalVisual = modalIndex === null ? null : visuals[modalIndex];
  const hasMultipleVisuals = visuals.length > 1;
  const modalVideoRemaining = Math.max(modalVideoTime.duration - modalVideoTime.current, 0);

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
    setModalIndex(null);
    setModalVideoTime(initialVideoTime);
  }, [project.title]);

  useEffect(() => {
    setModalVideoTime(initialVideoTime);
  }, [modalIndex]);

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
          <h3 className="break-words text-xl font-semibold leading-7 text-slate-950 sm:text-2xl sm:leading-8">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="max-w-full break-words rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-700">{project.period}</span>
            <span className="max-w-full break-words rounded-md bg-signal-green/10 px-3 py-1.5 text-sm font-semibold leading-6 text-signal-green">{project.mainRole}</span>
          </div>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{project.overview}</p>
        </div>
      </div>

      {visuals.length > 0 ? (
        <section className="screen-visuals mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold text-slate-950">이미지 / 수행 내역</h4>
            <p className="text-xs font-semibold text-slate-400">{visuals.length}개 자료</p>
          </div>
          {project.visualNote ? (
            <p className="mb-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium leading-6 text-slate-500">
              {renderHighlightedText(project.visualNote)}
            </p>
          ) : null}
          <div className={visuals.length === 1 ? 'grid gap-4' : 'grid gap-4 md:grid-cols-2'}>
            {visuals.map((visual, index) => (
              <article key={`${visual.title}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm sm:p-3">
                <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {visual.videoUrl ? (
                    <>
                      <video
                        key={visual.videoUrl}
                        src={visual.videoUrl}
                        className="aspect-[4/3] w-full object-contain p-1.5 sm:aspect-video sm:p-3"
                        aria-label={`${visual.title} 영상`}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <button
                        type="button"
                        onClick={() => setModalIndex(index)}
                        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-sm outline-none transition hover:border-signal-cyan hover:text-signal-cyan focus-visible:ring-2 focus-visible:ring-signal-cyan"
                        aria-label={`${visual.title} 크게 보기`}
                      >
                        <Maximize2 aria-hidden="true" size={17} />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => visual.imageUrl && setModalIndex(index)}
                      disabled={!visual.imageUrl}
                      className="block w-full cursor-zoom-in outline-none disabled:cursor-default focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2"
                      aria-label={`${visual.title} 크게 보기`}
                    >
                      {visual.imageUrl ? (
                        <img
                          src={visual.imageUrl}
                          alt={visual.alt ?? visual.title}
                          className="aspect-[4/3] w-full object-contain p-1.5 sm:aspect-video sm:p-3"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding={index === 0 ? 'sync' : 'async'}
                        />
                      ) : (
                        <div className="flex aspect-video w-full items-center justify-center text-sm font-bold text-slate-400">
                          Media Slot {index + 1}
                        </div>
                      )}
                    </button>
                  )}
                </div>

                <div className="px-1 pb-1 pt-3">
                  <h5 className="break-keep text-sm font-extrabold leading-6 text-slate-950 sm:text-base sm:leading-7">{visual.title}</h5>
                  <p className="mt-1 break-keep text-xs font-semibold leading-5 text-slate-500 sm:text-sm sm:leading-6">{renderHighlightedText(visual.description)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {visuals.length > 0 ? (
        <section className="print-visuals" aria-label={`${project.title} PDF 이미지 목록`}>
          <h4>이미지 / 수행 내역</h4>
          {project.visualNote ? <p className="print-visuals__note">{renderHighlightedText(project.visualNote)}</p> : null}
          <div className="print-visuals__grid">
            {visuals.map((visual, index) => (
              <div key={`${visual.title}-${index}`} className="print-visuals__item">
                {visual.imageUrl ? (
                  <img src={visual.imageUrl} alt={visual.alt ?? visual.title} loading="eager" decoding="sync" />
                ) : (
                  <div className="print-visuals__video">영상 자료</div>
                )}
                <p className="print-visuals__title">{visual.title}</p>
                <p className="print-visuals__description">{renderHighlightedText(visual.description)}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:mt-6 sm:p-4">
        <h4 className="text-sm font-semibold text-signal-green">상세 수행 내용</h4>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {project.detailSections.map((section) => (
            <div key={section.title} className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
              <p className="break-keep text-sm font-bold leading-6 text-slate-950 sm:text-base sm:leading-7">{section.title}</p>
              <ul className="mt-2 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="break-keep text-sm leading-6 text-slate-600 sm:leading-7">
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
          aria-label={`${modalVisual.title} 확대 보기`}
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
              {modalVisual.videoUrl ? (
                <video
                  key={modalVisual.videoUrl}
                  src={modalVisual.videoUrl}
                  className="max-h-[70vh] w-full object-contain sm:max-h-[78vh]"
                  aria-label={`${modalVisual.title} 영상`}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  onDurationChange={(event) => setModalVideoTime(readVideoTime(event))}
                  onLoadedMetadata={(event) => setModalVideoTime(readVideoTime(event))}
                  onTimeUpdate={(event) => setModalVideoTime(readVideoTime(event))}
                />
              ) : modalVisual.imageUrl ? (
                <img
                  src={modalVisual.imageUrl}
                  alt={modalVisual.alt ?? modalVisual.title}
                  className="max-h-[70vh] w-full object-contain sm:max-h-[78vh]"
                  decoding="async"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center text-sm font-bold text-slate-400">
                  Media Slot {(modalIndex ?? 0) + 1}
                </div>
              )}
            </div>

            <div className="mt-3 pr-12 sm:mt-4">
              <p className="text-base font-extrabold text-slate-950 sm:text-lg">{modalVisual.title}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 sm:text-sm sm:leading-6">{renderHighlightedText(modalVisual.description)}</p>
              {modalVisual.videoUrl ? (
                <p className="mt-2 text-xs font-semibold text-slate-400 sm:text-sm">
                  {formatMediaTime(modalVideoTime.current)} / {formatMediaTime(modalVideoTime.duration)}
                  <span className="mx-2 text-slate-300">/</span>
                  남은 시간 {formatMediaTime(modalVideoRemaining)}
                </p>
              ) : null}
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
