export type NavItem = {
  label: string;
  href: string;
};

export type ProofPoint = {
  value: string;
  label: string;
  description: string;
  accent: 'cyan' | 'green' | 'amber' | 'rose' | 'violet';
};

export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  publicProjectNames: string[];
  summary: string;
  coreRoles: string[];
  achievements: string[];
  tags: string[];
};

export type Project = {
  title: string;
  company: string;
  period: string;
  mainRole: string;
  overview: string;
  highlights?: string[];
  publicNote?: string;
  detailSections: {
    title: string;
    items: string[];
  }[];
  problem?: string;
  role: string;
  architecture?: string;
  whatIBuilt?: string[];
  result?: string;
  techStack: string[];
  visualNote?: string;
  visuals?: {
    title: string;
    description: string;
    imageUrl?: string;
    alt?: string;
  }[];
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type NoteItem = {
  title: string;
  status: '준비 중';
  href?: string;
};

export type CertificationItem = {
  date: string;
  name: string;
  issuer: string;
};

export const profile = {
  nameKo: '장석한',
  nameEn: 'Seokhan Jang',
  role: 'Infrastructure / DevOps Engineer',
  headline:
    'Kubernetes 기반 운영 환경, CI/CD 자동화, Kafka 데이터 파이프라인, AI 인프라 구축 경험을 바탕으로 안정적인 서비스 운영 구조를 만드는 엔지니어입니다.',
  tagLine: 'Infrastructure · DevOps · Cloud · AI Infra',
  photoUrl: 'profile-photo.jpg',
  githubUrl: 'https://github.com/JANGSEOKHAN',
  linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-id',
  notesUrl: 'https://velog.io/@wkdtjrgks2/posts',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
];

export const aboutParagraphs = [
  'Linux, VMware/SAN, 데이터센터 운영 경험을 기반으로 서버와 스토리지, 네트워크 연결 구조를 함께 이해하는 인프라 엔지니어입니다.',
  'Kubernetes MSA 운영, Jenkins/PlasticSCM CI/CD, Kafka 클러스터 운영을 맡으며 반복 배포와 장애 징후 확인 과정을 자동화해 왔습니다.',
  '최근에는 H100 GPU 기반 VLLM 로컬 서빙, QdrantDB/Neo4j 기반 RAG PoC를 수행하며 DevOps 경험을 AI Infra 영역으로 확장하고 있습니다.',
];

export const proofPoints: ProofPoint[] = [
  {
    value: '4년 7개월+',
    label: '인프라/시스템 운영 및 구축 경력',
    description: 'Linux, VMware/SAN, Kubernetes, CI/CD 운영 경험',
    accent: 'cyan',
  },
  {
    value: '23개 해외 법인',
    label: '배포 서버 및 Kubernetes/Kafka 운영',
    description: '법인별 배포 로그 수집과 운영 상태 점검',
    accent: 'green',
  },
  {
    value: '2GB 30분 → 약 5분',
    label: 'SFTP 수동 배포를 CI/CD로 전환',
    description: 'Jenkins/PlasticSCM 기반 Unity Build 자동화',
    accent: 'amber',
  },
  {
    value: '250개+ API Pod',
    label: 'Kubernetes 기반 MSA 운영',
    description: 'Pod 상태, request/limit, ConfigMap/Secret 관리',
    accent: 'violet',
  },
  {
    value: '64 Kafka Brokers',
    label: 'Kafka 업그레이드 및 보안 적용',
    description: 'SCRAM 인증, ACL, Consumer Group Lag 점검',
    accent: 'rose',
  },
  {
    value: '200개 VM 이관',
    label: 'VMware/SAN 데이터센터 이관',
    description: 'Datastore migration, SAN Zoning, LUN 인식 점검',
    accent: 'cyan',
  },
  {
    value: 'H100 GPU 4장',
    label: 'VLLM 기반 LLM 로컬 서빙 PoC',
    description: 'CUDA/VLLM, Qwen3, RAG 검색/검증 흐름 구성',
    accent: 'green',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: '메타넷디지털 주식회사',
    period: '2025.04 ~ 현재',
    role: 'DevOps Engineer / Modern Factory Team',
    publicProjectNames: ['삼성전자 DX MES 디지털 트윈 운영 사업'],
    summary:
      '제조 DX 운영 환경에서 Linux 서버, Kubernetes MSA, CI/CD, Kafka, AI Infra/RAG PoC를 함께 다루며 운영 자동화와 안정화 업무를 수행하고 있습니다.',
    coreRoles: [
      'Linux 서버 및 스토리지 운영',
      'Kubernetes 기반 MSA 운영',
      'Jenkins/PlasticSCM 기반 CI/CD 구축',
      'Kafka 클러스터 운영 및 보안 고도화',
      'AI Infra/RAG PoC 구축',
    ],
    achievements: [
      'Oracle Linux 7.9에서 8.10으로 업그레이드하고 LVM, NTP, NFS, Metric 기본 환경을 운영',
      'TCP Wrappers, iptables/firewalld 기반 접근 제어 적용',
      'Ceph 클러스터 구축 및 데이터 이중화 구조 구성',
      'Keepalived, Nginx, HAProxy 기반 프록시 환경 구성',
      'SFTP 수동 배포를 Jenkins/PlasticSCM 기반 CI/CD로 전환',
      '2GB 기준 배포 시간을 30분 이상에서 약 5분으로 단축',
      '90개 PlasticSCM repository 운영, 브랜치 전략 및 ACL 관리',
      '23개 법인 배포 로그 수집 Shell Script 작성',
      'Kubernetes Namespace, Pod, PVC, ConfigMap, Secret 운영',
      'Pending/Error Pod 발생 시 request/limit 재산정',
      '23개 법인 Kubernetes API Server, Calico, etcd 백업 상태 점검',
      'Kafka 64개 Broker 업그레이드, SCRAM 인증과 ACL 적용',
      'Consumer Group Lag 및 Redis endpoint 유입 상태 점검',
    ],
    tags: ['Linux', 'Kubernetes', 'Jenkins', 'PlasticSCM', 'Kafka', 'Ceph', 'AI Infra'],
  },
  {
    company: '대신정보통신',
    period: '2021.01 ~ 2024.05',
    role: 'IT 시스템 운영 및 구축 / SI사업본부',
    publicProjectNames: ['서울특별시데이터센터 정보자원통합 사업', '에프앤가이드(주) 망분리 및 보안 솔루션 구축 사업'],
    summary:
      '서울특별시데이터센터 정보자원통합 및 보안 구축 사업에서 VMware vSphere, RHEL/CentOS, SAN, 물리 인프라 작업을 수행하며 온프레미스 운영 기반을 다졌습니다.',
    coreRoles: [
      'VMware vSphere 기반 VM 구축 및 이관',
      'RHEL/CentOS 서버 기본 환경 구성',
      'SAN Switch Zoning 및 Datastore 인식 점검',
      'Linux 보안 취약점 조치',
      '데이터센터 물리 인프라 구축 지원',
      '제안서 및 작업계획서 작성',
    ],
    achievements: [
      'VMware vSphere 기반 신규 VM 생성 및 운영 환경 구성',
      'VM Datastore migration 수행',
      'Brocade SAN Switch 교체 및 Zoning 약 150건 수행',
      '약 200개 VM 이관 프로젝트 지원',
      '공공기관 70여 개 서버 모니터링 및 관제',
      'RHEL/CentOS 계정 정책, 권한, 보안 취약점 조치',
      '서버, 스토리지, 네트워크 장비 재배치 및 케이블링 지원',
      'Active Directory, NAC, DRM 기반 보안 솔루션 구축 지원',
    ],
    tags: ['VMware', 'RHEL', 'CentOS', 'SAN', 'Brocade', 'Datastore', 'Security'],
  },
];

export const projects: Project[] = [
  {
    title: '삼성전자 DX MES 디지털 트윈 운영 사업',
    company: '메타넷디지털 주식회사',
    period: '2025.04 ~ 2026.05 · 진행중',
    mainRole: 'DevOps 운영 파트',
    role: 'Linux 서버/스토리지 운영, CI/CD 구축/운영, Kubernetes MSA 운영, Kafka 클러스터 운영 및 보안 고도화',
    overview:
      '제조 DX 환경에서 디지털 트윈 솔루션의 서버, 배포, 컨테이너, Kafka 데이터 파이프라인을 운영하며 수동 배포를 자동화 가능한 구조로 전환했습니다.',
    publicNote: '공개 포트폴리오용으로 고객사명과 내부 시스템명은 익명화했습니다.',
    highlights: ['2GB 기준 배포 시간 30분 이상 → 약 5분', '해외 23개 법인 운영 점검', 'Kafka 64개 Broker 운영/업그레이드'],
    detailSections: [
      {
        title: 'Linux 서버 및 스토리지 운영',
        items: [
          'Oracle Linux 7.9 → 8.10 업그레이드와 LVM/NTP/NFS/Metric 기본 환경 운영',
          'Ceph 데이터 이중화와 Keepalived/Nginx/HAProxy 기반 프록시 환경 구성',
        ],
      },
      {
        title: 'CI/CD 자동화 배포 구축/운영',
        items: [
          'SFTP 수동 배포를 Jenkins/PlasticSCM 기반 Unity Build 자동화 파이프라인으로 전환',
          '90개 repository 브랜치/ACL 운영과 23개 법인 배포 로그 중앙 수집 구조 구성',
        ],
      },
      {
        title: 'MSA 인프라 운영/관리',
        items: [
          'Namespace, Pod, PVC, ConfigMap, Secret 운영과 Pending/Error Pod 리소스 재산정',
          'API Server, Calico, etcd 백업 상태 점검 및 Helm API 기반 Backend Pod 배포 관리',
        ],
      },
      {
        title: 'Kafka 클러스터 운영 및 고도화',
        items: [
          '23개 법인 64개 Kafka Broker 3.9 업그레이드와 SCRAM/ACL 보안 적용',
          'Consumer Group Lag 모니터링과 Redis endpoint 데이터 유입 상태 점검',
        ],
      },
    ],
    result:
      '디지털 트윈 서비스 SFTP 수작업 배포를 CI/CD로 전환하여 2GB 기준 배포 시간을 30분 이상에서 약 5분으로 단축했습니다. MSA 운영 환경에서 디지털트윈 Backend Pod, ConfigMap/Secret, PVC 및 데이터 파이프라인 상태를 점검하고 해외 23개 법인의 운영 로그 확인 체계를 구축하여 디지털트윈 서비스 안정화에 기여했습니다.',
    techStack: ['Linux', 'Kubernetes', 'Docker', 'Kafka', 'MongoDB', 'Jenkins', 'PlasticSCM', 'GitHub', 'Ceph', 'Nginx', 'HAProxy'],
    visualNote:
      '디지털 트윈 서비스 화면과 엑셈원 모니터링 이미지는 공식 홈페이지/브로셔 제공 자료를 활용했고, 데이터 파이프라인 및 CI/CD 아키텍처는 직접 설계한 자료입니다.',
    visuals: [
      {
        title: '디지털 트윈 서비스 화면',
        description: '운영 중인 디지털 트윈 서비스 대시보드 화면',
        imageUrl: 'projects/dmf/digital-twin-service.png',
        alt: '디지털 트윈 서비스 운영 화면',
      },
      {
        title: '데이터 파이프라인 운영',
        description: 'Edge Data, Kafka, Consumer, Database로 이어지는 운영 흐름',
        imageUrl: 'projects/dmf/data-pipeline.png',
        alt: '디지털 트윈 서비스 데이터 파이프라인 운영 구조',
      },
      {
        title: 'CI/CD 전환 구조',
        description: 'SFTP 수동 배포에서 PlasticSCM/Jenkins 기반 자동 배포로 전환',
        imageUrl: 'projects/dmf/cicd-transition.png',
        alt: 'SFTP 방식에서 CI/CD 방식으로 전환한 배포 구조',
      },
      {
        title: '엑셈원 모니터링 / Kubernetes 컨테이너 관리',
        description: 'Pod, Container, Kafka, DBMS 모니터링 기반 운영 상태 확인',
        imageUrl: 'projects/dmf/k8s-monitoring.png',
        alt: '디지털 트윈 서비스 Kubernetes 컨테이너 관리 및 모니터링 화면',
      },
    ],
  },
  {
    title: '삼성 구미 디지털트윈 솔루션 챗봇 환경 구축 POC',
    company: '메타넷디지털 주식회사',
    period: '2025.12.15 ~ 2026.01.24',
    mainRole: 'AI 인프라 구축 담당',
    role: 'GPU 서버 운영, VLLM 로컬 서빙 환경 구성, API 메타데이터 Graph DB 및 MCP 연계 흐름 구축',
    overview:
      '제조 설비와 API 메타데이터를 활용하는 업무형 챗봇 PoC에서 GPU 서버와 로컬 LLM 서빙 환경을 구성했습니다.',
    publicNote: '사업장명과 내부 API 명칭은 공개용으로 익명화했습니다.',
    highlights: ['H100 GPU 4장 기반 PoC', 'Ollama → VLLM 전환', 'Neo4j + MCP 기반 API 응답 흐름 구성'],
    detailSections: [
      {
        title: 'GPU 서버 운영 및 로컬 서빙 환경 구축',
        items: [
          'H100 GPU 4장 환경에 CUDA/VLLM을 구성하고 Qwen3 72B 로컬 서빙 PoC 수행',
          'Ollama에서 VLLM으로 전환해 응답 속도를 개선하고 tensor parallel/token 설정 조정',
          'Neo4j Graph DB와 MCP 서버를 연계해 API 메타데이터 기반 답변 흐름 구성',
        ],
      },
    ],
    result:
      'H100 GPU 서버에 CUDA와 vLLM 기반 로컬 LLM 서빙 환경을 구축하고, Qwen3 72B 모델을 안정적으로 구동할 수 있도록 구성했습니다. 기존 Ollama 환경을 vLLM으로 전환하고 tensor parallel 및 토큰 설정을 최적화하여 답변 속도를 개선했으며, Neo4j 기반 API 메타데이터와 MCP 서버 연동 로직을 적용해 설비 질문 시 필요한 API 값을 추출·응답하는 업무형 디지털트윈 챗봇 환경을 구현했습니다.',
    techStack: ['Python', 'FastAPI', 'Docker', 'VLLM', 'CUDA', 'ReactAgent', 'Neo4j', 'MCP', 'Qwen3'],
  },
  {
    title: '삼성 SMD 제조 장비 자산화 RAG 구축 POC',
    company: '메타넷디지털 주식회사',
    period: '2025.11.03 ~ 2025.12.19',
    mainRole: 'RAG 구축 개발/인프라 담당',
    role: '문서 OCR/Markdown 변환, QdrantDB 기반 하이브리드 검색, VLLM/LLM 검증, 멀티턴 챗봇 구성',
    overview:
      '제조 장비 매뉴얼과 비정형 데이터를 검색 가능한 지식 베이스로 구성하고, 검색/검증/대화 흐름을 갖춘 RAG PoC를 구축했습니다.',
    publicNote: '제조 장비명과 원본 매뉴얼 세부 정보는 공개하지 않았습니다.',
    highlights: ['Dify RAG 자동화 파이프라인', 'QdrantDB hybrid search', 'Qwen3-VL 기반 답변 검증'],
    detailSections: [
      {
        title: '비정형 제조 데이터의 자산화',
        items: [
          'Dify RAG 파이프라인과 Mineru OCR로 제조 매뉴얼을 Markdown/Chunk 단위로 구조화',
          '구조화된 문서를 지식 베이스로 구성해 검색 가능한 형태로 전환',
        ],
      },
      {
        title: 'Qdrant 하이브리드 DB 구축',
        items: [
          '문서별 메타데이터 생성, 임베딩, QdrantDB 저장 및 hybrid search 구성',
          'Qwen3-VL 기반 답변 검증 프로세스를 도입해 할루시네이션 개선',
        ],
      },
      {
        title: '챗봇 멀티턴 구성',
        items: [
          'Redis session과 ReactAgent 프롬프트를 활용한 대화형 RAG 챗봇 구성',
        ],
      },
    ],
    result:
      '제조 장비 PDF 매뉴얼을 OCR 기반 Markdown 구조로 변환하고, 청크·메타데이터·임베딩 자동화를 통해 QdrantDB 기반 지식베이스를 구축했습니다. 메타데이터 필터링, 유사도 검색, Qwen3-VL 검증, Redis 세션 저장을 적용해 텍스트/이미지 기반 멀티턴 RAG 챗봇 PoC에 기여했으며, 비정형 문서를 AI 서비스용 데이터 자산으로 전환하는 경험을 쌓았습니다.',
    techStack: ['Python', 'FastAPI', 'QdrantDB', 'RAG', 'Docker', 'LLM', 'CUDA', 'ReactAgent', 'VLLM', 'LangChain', 'Dify', 'Redis'],
    visualNote:
      'RAG 데이터 파이프라인 아키텍처와 Dify 챗봇 워크플로우는 직접 설계한 자료이며, 챗봇 화면은 제조 장비 매뉴얼 RAG PoC 시연 화면입니다.',
    visuals: [
      {
        title: 'RAG 데이터 파이프라인 아키텍처',
        description: 'MinerU OCR, Markdown/Image 파싱, Vector Store, FastAPI 응답 흐름',
        imageUrl: 'projects/rag/rag-architecture.png',
        alt: '제조 장비 매뉴얼 RAG 데이터 파이프라인 아키텍처',
      },
      {
        title: '제조 장비 매뉴얼 RAG 챗봇 화면',
        description: '제조 장비 매뉴얼과 API 정보를 기반으로 답변하는 PoC 챗봇 화면',
        imageUrl: 'projects/rag/rag-chatbot-screen.png',
        alt: '제조 장비 매뉴얼 RAG PoC 챗봇 시연 화면',
      },
      {
        title: 'Dify SMD 챗봇 워크플로우',
        description: '이미지/텍스트 입력 분기, 질문 분류, RAG 검색, 답변 생성으로 이어지는 Dify 워크플로우',
        imageUrl: 'projects/rag/dify-chatbot-workflow.png',
        alt: '삼성 SMD 제조 장비 자산화 RAG 구축 POC Dify 챗봇 워크플로우',
      },
    ],
  },
  {
    title: '2023년 서울특별시데이터센터 정보자원통합 사업',
    company: '대신정보통신',
    period: '2023.07 ~ 2024.03 · 9개월',
    mainRole: '서버/스토리지 지원',
    role: 'VMware vSphere 기반 VM 구축/이관, RHEL 서버 초기 구성, SAN Switch Zoning 및 Datastore 인식 점검',
    overview:
      '서울특별시데이터센터 환경에서 가상화 서버 구축과 SAN 스위치 이관, Datastore migration을 지원했습니다.',
    publicNote: '공공기관명과 상세 시스템명은 공개용으로 익명화했습니다.',
    highlights: ['SAN Zoning 약 150건', 'VM Datastore migration', 'RHEL 보안 취약점 조치'],
    detailSections: [
      {
        title: '가상화 서버 구축 및 운영 지원',
        items: [
          'VMware vSphere 기반 신규 VM 생성 및 가상화 서버 운영 환경 구성',
          '신규 VM 대상 OS 기본 설정, 네트워크 설정, 기본 패키지 설치 등 서버 초기 구성 수행',
          'RHEL 운영 기준에 따른 계정 정책, 권한 설정 등 보안 취약점 조치 수행',
          'VM Datastore migration 수행 후 VM 기동 상태와 서비스 영향 여부 점검',
        ],
      },
      {
        title: 'SAN 스위치 이관 및 Zoning 작업',
        items: [
          '기존 SAN 스위치의 서버-스토리지 연결 구성 확인 및 Config 백업 수행',
          '서버 HBA WWN, 스토리지 Port WWN, 기존 Zone 구성 정보를 기준으로 이관 대상 정리',
          'Brocade SAN 스위치 교체에 따른 신규 SAN Zoning 약 150건 수행',
          'Zoning 반영 후 LUN 인식, VMware Datastore 인식, 서버-스토리지 연결 정상 여부 점검',
        ],
      },
    ],
    result:
      'VMware vSphere 기반 신규 VM 구성, OS·네트워크 초기 설정, Datastore 마이그레이션 후 기동 점검을 수행하여 가상화 운영 환경을 안정화했습니다. Brocade SAN 스위치 이관 시 Config 백업, WWN 기반 Zone 정리, 약 150건의 SAN Zoning 및 LUN·Datastore 인식 점검을 수행하며 서버-스토리지 연동 및 가상화 인프라 운영 역량을 확보했습니다.',
    techStack: ['VMware vSphere', 'RHEL', 'Brocade SAN', 'Storage', 'Datastore', 'LUN'],
    visualNote:
      '보안상 실제 시스템명, 계정, IP, 세부 구성값은 제거 또는 블러 처리했으며, SAN Zoning부터 vMotion/Datastore 이관 흐름을 설명하기 위한 일부 화면만 사용했습니다.',
    visuals: [
      {
        title: 'SAN Zoning / WWN 구성 정리',
        description: '서버 HBA WWN과 스토리지 Port WWN을 기준으로 Zone 구성과 적용 절차를 정리한 화면',
        imageUrl: 'projects/datacenter/san-zoning-wwn.png',
        alt: 'SAN Zoning 및 WWN 구성 정리 화면',
      },
      {
        title: 'vMotion 기반 스토리지 이관 흐름',
        description: '기존 가상화 스토리지에서 신규 가상화 스토리지로 Datastore migration을 수행하는 구조',
        imageUrl: 'projects/datacenter/vmotion-storage-migration.png',
        alt: 'vMotion 기반 스토리지 이관 흐름도',
      },
      {
        title: 'Datastore 인식 및 용량 확인',
        description: '이관 대상 Datastore 인식 상태와 용량, 정상 연결 여부를 확인한 화면',
        imageUrl: 'projects/datacenter/datastore-recognition.png',
        alt: 'VMware vSphere Datastore 인식 및 용량 확인 화면',
      },
      {
        title: '신규 vCenter Datastore VM 등록',
        description: '이관 후 신규 vCenter 환경에서 VM 파일과 Datastore 경로를 확인하고 VM 등록을 진행한 화면',
        imageUrl: 'projects/datacenter/vm-registration-datastore.png',
        alt: '신규 vCenter Datastore VM 등록 및 데이터 마이그레이션 화면',
      },
    ],
  },
  {
    title: '2022년 서울특별시데이터센터 정보자원통합 사업',
    company: '대신정보통신',
    period: '2022.07 ~ 2023.03 · 9개월',
    mainRole: '서버/스토리지 지원',
    role: '가상화 서버 구축, 스토리지 이관, SAN Zoning, Datastore migration, 서버 관제',
    overview:
      '스토리지 이관과 가상화 서버 운영 지원을 담당하며 서버와 신규 스토리지 간 연결 상태를 확인했습니다.',
    publicNote: '공공기관명과 상세 시스템명은 공개용으로 익명화했습니다.',
    highlights: ['SAN Zoning 작업', 'VM Datastore migration', '70여 개 서버 모니터링'],
    detailSections: [
      {
        title: '가상화 서버 구축 및 스토리지 이관',
        items: [
          '서버와 신규 스토리지 간 SAN Zoning 작업 수행',
          '스토리지 엔지니어와 협의하여 서버별 LUN 할당 및 인식 상태 확인',
          '기존 VM 대상 Datastore migration 수행 및 이관 후 VM 기동 상태 점검',
          'CentOS 7 기반 IP 설정, 파일시스템 구성 등 서버 기본 환경 구성',
        ],
      },
      {
        title: '서버 모니터링 및 관제',
        items: [
          '공공기관 약 70여 대 서버의 트랜잭션, 응답속도, CPU 등 운영 지표 모니터링',
          '관제 지표를 기반으로 이상 징후를 확인하고 데이터센터 서버 안정 관리 지원',
        ],
      },
    ],
    result:
      '신규 스토리지 도입에 따라 서버별 LUN 할당 확인과 VM Datastore 마이그레이션을 수행하여 기존 가상화 서버의 스토리지 이관을 안정적으로 지원했습니다. 또한 CentOS 7 기반 서버 초기 환경 구성과 공공기관 약 70여 대 서버의 CPU·트랜잭션·응답속도 모니터링을 통해 데이터센터 운영 안정화 및 장애 예방 역량을 확보했습니다.',
    techStack: ['VMware vSphere', 'RHEL', 'CentOS 7', 'SAN', 'Storage', 'Datastore'],
  },
  {
    title: '2021년 서울특별시데이터센터 정보자원통합 사업',
    company: '대신정보통신',
    period: '2021.07 ~ 2022.05 · 11개월',
    mainRole: '기반 시설 관리 및 서버 지원',
    role: 'Linux 신규 서버 구축, 보안 취약점 조치, 데이터센터 랙 교체 및 물리 인프라 운영 지원',
    overview:
      '데이터센터 기반 시설 관리와 Linux 서버 초기 구성, 보안 취약점 조치, 물리 장비 재배치 작업을 지원했습니다.',
    publicNote: '공공기관명과 상세 시스템명은 공개용으로 익명화했습니다.',
    highlights: ['Linux 신규 서버 초기 구성', 'KISA 보안 가이드 기반 조치', '랙 교체 및 케이블링 지원'],
    detailSections: [
      {
        title: 'Linux 기반 신규 서버 구축 및 초기 운영 환경 구성',
        items: [
          'Linux 기반 신규 서버의 IP 설정, 계정 정책, 권한 설정 등 초기 운영 환경 구성',
          '운영에 필요한 Tool 설치와 기본 설정을 수행해 서버 인수 후 운영 가능한 상태로 정리',
        ],
      },
      {
        title: '보안 취약점 조치',
        items: [
          'KISA 보안 가이드 기준 Linux 서버 취약점 점검 및 조치 수행',
          '계정 정책, 권한 설정, 불필요 설정 점검 등 서버 운영 기준 정비 지원',
        ],
      },
      {
        title: '데이터센터 노후 랙 교체 및 신규 랙 이전 작업',
        items: [
          '서버, 스토리지, 스위치 등 주요 장비 재배치 작업 지원',
          '신규 서버 및 스위치 연결을 위한 케이블 포설 작업 수행',
          '장비 위치, 포트 연결, 케이블 라벨링 등 물리 인프라 운영 지원',
        ],
      },
    ],
    result:
      'Linux 기반 신규 서버의 IP, 계정 정책, 권한 설정 등 초기 운영 환경을 구성하고 KISA 보안 가이드 기반 취약점 조치를 수행하여 서버 운영 기준을 정비했습니다. 또한 노후 랙 교체, 장비 재배치, 케이블 포설 및 라벨링 작업을 통해 데이터센터 물리 인프라 운영과 하드웨어 구축 지원 역량을 확보했습니다.',
    techStack: ['RHEL', 'Linux', 'Data Center', 'Rack', 'Cabling', 'Security'],
  },
  {
    title: '에프앤가이드(주) 망분리 및 보안 솔루션 구축 사업',
    company: '대신정보통신',
    period: '2021.03 ~ 2021.05',
    mainRole: 'Windows PC 설치 및 Active Directory 연동',
    role: 'Windows 단말 구성, AD 도메인 연동, NAC/DRM 보안 솔루션 설치 및 운영 지원',
    overview:
      '망분리 환경에서 사용자 단말 보안 솔루션 설치와 Active Directory 연동, 헬프데스크 업무를 지원했습니다.',
    publicNote: '고객사명과 내부 보안 정책 상세값은 공개용으로 익명화했습니다.',
    highlights: ['Active Directory 도메인 연동', 'NAC/DRM 설치 점검', '사용자 단말 보안 정책 적용 지원'],
    detailSections: [
      {
        title: '보안 솔루션 구축 및 사용자 환경 지원',
        items: [
          'Windows PC 설치 및 Active Directory 도메인 연동 작업 수행',
          'NAC, DRM 등 보안 솔루션 설치 및 정상 동작 여부 점검',
          '사용자 PC 환경 설정, 장애 접수 및 처리 등 헬프데스크 업무 수행',
          '망분리 환경 내 사용자 단말 보안 정책 적용 및 운영 지원',
        ],
      },
    ],
    result:
      'Windows PC 설치와 Active Directory 도메인 연동, NAC·DRM 보안 솔루션 설치 및 점검을 수행하여 망분리 환경의 단말 보안 정책 적용을 지원했습니다. 사용자 PC 환경 설정과 헬프데스크 대응을 통해 Windows 기반 사용자 지원 및 보안 솔루션 운영 경험을 확보했습니다.',
    techStack: ['Windows', 'Active Directory', 'NAC', 'DRM', 'Helpdesk'],
  },
  {
    title: '육아제품 추천 및 가계부 서비스',
    company: 'AWS Cloud School',
    period: '2025.01.17 ~ 2025.03.25',
    mainRole: 'Ops / Architecture 담당',
    role: 'On-premise Kubernetes 3-Tier 구성, AWS EKS 아키텍처 설계, 데이터 파이프라인 및 비용 관리',
    overview:
      '아기 정보를 기반으로 육아제품을 추천하고 지출을 관리하는 서비스를 Cloud Native 환경으로 설계/구축한 교육 프로젝트입니다.',
    highlights: ['Kafka 기반 크롤링 데이터 파이프라인', 'Kubespray 기반 Kubernetes 3-Tier', 'EKS/CloudFormation/IRSA 기반 Cloud Migration'],
    detailSections: [
      {
        title: 'Data Pipeline',
        items: [
          'Python 크롤링 데이터를 Kafka Topic으로 저장하고 Consumer를 통해 Amazon Bedrock API와 연계',
          'MongoDB 적재와 Replica Set 구성, DynamoDB migration 흐름 검토',
        ],
      },
      {
        title: 'Kubernetes / Cloud Architecture',
        items: [
          'Kubespray 기반 On-premise Kubernetes 3-Tier와 Istio Ambient Mode 구성',
          'VPC, EKS, CloudFormation, IRSA 설계 및 구축',
        ],
      },
      {
        title: 'Monitoring / Operation',
        items: [
          'Kiali와 LGTM 계열 도구로 메트릭/API 모니터링 구성',
          'Amazon Service 비용관리(FinOps), DataPipeline, 종합 발표 담당',
        ],
      },
    ],
    result:
      '7개월간 AWS와 MSA 실무 교육을 통해 Kubernetes 기반 MSA 구조, 컨테이너 배포, CI/CD, 모니터링, AWS 인프라 설계에 대한 실무 기반을 다졌습니다. 프로젝트에서는 육아제품 추천 서비스의 데이터 수집, 리뷰 요약, 저장, 클라우드 전환까지 전체 흐름을 설계하고, 데이터 수집부터 AI 요약, 저장소 전환, EKS 배포가 연결되는 클라우드 기반 서비스 아키텍처를 구현했습니다. 이를 통해 온프레미스 Kubernetes 환경을 AWS EKS로 확장하고 VPC, IRSA, CloudFormation, DB 마이그레이션을 적용하는 Cloud Migration 및 MSA 운영 역량을 확보했습니다.',
    techStack: ['AWS', 'EKS', 'Kubernetes', 'Kafka', 'MongoDB', 'DynamoDB', 'Kubespray', 'Istio', 'CloudFormation', 'IRSA'],
    visuals: [
      { title: 'Data Pipeline', description: 'Python · Kafka · Bedrock' },
      { title: 'Kubernetes 3-Tier', description: 'Kubespray · Istio · Kiali' },
      { title: 'Cloud Migration', description: 'EKS · CloudFormation · IRSA' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Infrastructure / Virtualization',
    description: 'Linux 서버, 가상화, 스토리지 운영 경험',
    items: ['Linux', 'Oracle Linux', 'RHEL', 'VMware vSphere', 'SAN', 'Ceph'],
  },
  {
    title: 'DevOps / CI/CD',
    description: '배포 자동화와 소스/권한 운영',
    items: ['Jenkins', 'PlasticSCM', 'GitHub', 'Shell Script', 'Docker'],
  },
  {
    title: 'Kubernetes / Messaging',
    description: 'MSA 운영과 데이터 파이프라인 관리',
    items: ['Kubernetes', 'Helm', 'Calico', 'etcd', 'Kafka', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI Infra / RAG',
    description: 'GPU 서빙과 문서 기반 RAG PoC',
    items: ['Python', 'FastAPI', 'CUDA', 'VLLM', 'QdrantDB', 'Neo4j', 'Dify', 'LangChain'],
  },
];

export const certifications: CertificationItem[] = [
  {
    date: '2026.04',
    name: 'AI-POT(AI프롬프트활용능력) 1급',
    issuer: '한국생산성본부',
  },
  {
    date: '2025.01',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Linux Foundation',
  },
  {
    date: '2025.01',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon AWS',
  },
  {
    date: '2025.01',
    name: '리눅스마스터 2급',
    issuer: '한국정보통신진흥협회',
  },
  {
    date: '2024.12',
    name: 'SQL 개발자',
    issuer: '한국데이터산업진흥원',
  },
  {
    date: '2024.12',
    name: '네트워크관리사 2급',
    issuer: '한국정보통신자격협회',
  },
  {
    date: '2020.11',
    name: '정보처리기사',
    issuer: '한국산업인력공단',
  },
];

export const notes: NoteItem[] = [
  {
    title: 'Kubernetes Pod Pending 원인 분석과 request/limit 재산정',
    status: '준비 중',
  },
  {
    title: 'Jenkins/PlasticSCM 기반 Unity Build 자동화',
    status: '준비 중',
  },
  {
    title: 'Kafka SCRAM/ACL 적용 기록',
    status: '준비 중',
  },
  {
    title: 'VLLM 기반 로컬 LLM 서빙 전환기',
    status: '준비 중',
  },
];
