const proofStories = [
  {
    kicker: 'Platform Operations',
    value: '4년 7개월+',
    title: '서버/스토리지 기반에서 MSA 플랫폼 운영까지',
    description:
      'VMware/SAN과 데이터센터 이관으로 다진 인프라 기본기를 Kubernetes MSA, Kafka, CI/CD 운영으로 확장해 왔습니다.',
    bullets: ['250개+ API Pod 운영', '200개 VM 이관 지원', '23개 해외 법인 운영 점검'],
  },
  {
    kicker: 'Automation Strength',
    value: '30분 → 약 5분',
    title: '기존 배포 시스템을 자동화 중심으로 개선',
    description:
      'SFTP 기반 수동 배포 과정을 Jenkins/PlasticSCM 파이프라인으로 개선하고, 브랜치/권한 관리와 법인별 로그 수집까지 함께 정리했습니다.',
    bullets: ['Unity Build 자동화 구축', '90개 repository 브랜치/ACL 운영', '23개 법인 배포 로그 수집'],
  },
  {
    kicker: 'Reliability Scope',
    title: '데이터 파이프라인과 AI 인프라까지 폭넓은 인프라 경험',
    description:
      'Kafka Broker 업그레이드, SCRAM/ACL 보안 적용, Consumer Lag 점검을 수행했고 VLLM/RAG PoC도 운영 관점에서 구성했습니다.',
    bullets: ['64개 Kafka Broker 운영/보안 적용', 'H100 GPU 서버 기반 VLLM 서빙', 'QdrantDB/Neo4j RAG 흐름 구성'],
  },
];

export default function ProofPoints() {
  return (
    <section id="proof" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <span className="pointer-events-none absolute -top-10 left-0 hidden text-8xl font-black uppercase text-slate-900/[0.045] sm:block lg:text-9xl">
            Proof
          </span>
          <h2 className="relative text-3xl font-extrabold text-slate-950 sm:text-5xl">Proof Points</h2>
        </div>
        <div className="mt-7 grid items-stretch gap-4 sm:mt-8 lg:grid-cols-3 lg:gap-5">
          {proofStories.map((point) => (
            <article key={point.kicker} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase text-signal-cyan">{point.kicker}</p>
              {point.value ? (
                <p className="mt-3 text-2xl font-semibold text-slate-950 sm:mt-4 sm:text-3xl">{point.value}</p>
              ) : null}
              <h3 className={`${point.value ? 'mt-3 sm:mt-4' : 'mt-4 sm:mt-5'} text-xl font-bold leading-7 text-slate-950 sm:text-2xl sm:leading-8 lg:min-h-[4rem]`}>
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{point.description}</p>
              <ul className="mt-auto space-y-2 pt-5">
                {point.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 sm:text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
