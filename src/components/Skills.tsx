import { skillCategories } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 pt-8 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-10">
          <h2 className="inline-block border-b-2 border-signal-cyan pb-3 text-3xl font-extrabold text-signal-cyan sm:text-5xl">
            Skills
          </h2>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-950 sm:text-xl">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{category.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
