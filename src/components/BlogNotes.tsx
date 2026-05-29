import { BookOpen, ExternalLink, Github } from 'lucide-react';
import { notes } from '../data/profile';

const formatNoteUrl = (href: string) => {
  try {
    const url = new URL(href);
    return `${url.hostname}${decodeURIComponent(url.pathname).replace(/\/$/, '')}`;
  } catch {
    return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
};

export default function BlogNotes() {
  return (
    <section id="notes" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-10">
          <h2 className="inline-block border-b-2 border-signal-cyan pb-3 text-3xl font-extrabold text-signal-cyan sm:text-5xl">
            기술 노트
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => {
            const LinkIcon = note.status === 'GitHub' ? Github : BookOpen;

            return (
              <a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm outline-none transition hover:-translate-y-0.5 hover:border-signal-cyan/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2 focus-visible:ring-white sm:gap-4 sm:p-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-violet-50 text-signal-violet">
                  <BookOpen aria-hidden="true" size={20} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-start gap-2">
                    <h3 className="break-words text-base font-bold leading-7 text-slate-950 transition group-hover:text-signal-cyan sm:text-lg">
                      {note.title}
                    </h3>
                    <ExternalLink aria-hidden="true" className="mt-1 shrink-0 text-slate-300 transition group-hover:text-signal-cyan" size={15} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{note.summary}</p>
                  <span className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    {note.status}
                  </span>
                  <span className="print-note-link">
                    <LinkIcon aria-hidden="true" size={13} />
                    <span>{formatNoteUrl(note.href)}</span>
                    <ExternalLink aria-hidden="true" size={11} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
