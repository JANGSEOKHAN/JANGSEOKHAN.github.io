import { certifications } from '../data/profile';

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-10">
          <h2 className="inline-block border-b-2 border-signal-cyan pb-3 text-3xl font-extrabold text-signal-cyan sm:text-5xl">
            Certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {certifications.map((certification) => (
            <article key={`${certification.date}-${certification.name}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div>
                <p className="text-base font-extrabold text-signal-cyan sm:text-lg">{certification.date}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-7 text-slate-950 sm:text-xl sm:leading-8">{certification.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500 sm:text-base">{certification.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
