type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  watermark?: string;
};

export default function SectionTitle({ eyebrow, title, description, align = 'left', watermark }: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`relative max-w-4xl ${alignment}`}>
      {watermark ? (
        <span className="pointer-events-none absolute -top-10 left-0 hidden text-8xl font-black uppercase text-slate-900/[0.045] sm:block lg:text-9xl">
          {watermark}
        </span>
      ) : null}
      {eyebrow ? (
        <p className="relative text-sm font-bold uppercase text-signal-cyan sm:text-base">{eyebrow}</p>
      ) : null}
      <h2 className="relative mt-3 break-keep text-3xl font-extrabold leading-tight text-slate-950 sm:mt-4 sm:text-5xl">{title}</h2>
      {description ? <p className="relative mt-4 break-all text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
