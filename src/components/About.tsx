import { aboutParagraphs } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          description="'운영 경험'을 바탕으로 자동화와 안정성을 함께 고민하는 Infrastructure / DevOps Engineer입니다."
          watermark="About"
        />
        <div className="mt-7 grid gap-4 sm:mt-8 lg:grid-cols-3">
          {aboutParagraphs.map((paragraph, index) => (
            <article key={paragraph} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-signal-cyan">0{index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
