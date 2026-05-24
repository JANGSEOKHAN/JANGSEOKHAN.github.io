import { BookOpen, ExternalLink } from 'lucide-react';
import { notes, profile } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function BlogNotes() {
  const blogLabel = profile.notesUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <section id="blog" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Blog"
            title="운영하며 배운 내용을 기록으로 남깁니다."
            watermark="Blog"
          />
          <a
            href={profile.notesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none transition hover:border-signal-cyan/60 hover:text-signal-cyan focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2 focus-visible:ring-white sm:w-auto"
          >
            <span className="break-all">{blogLabel}</span>
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-2">
          {notes.map((note) => (
            <article key={note.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-violet-50 text-signal-violet">
                <BookOpen aria-hidden="true" size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold leading-7 text-slate-950 sm:text-lg">{note.title}</h3>
                <span className="mt-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-signal-amber">
                  {note.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
