import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {profile.nameEn}. Public portfolio.</p>
        <p>개인정보와 내부 시스템 정보는 공개 범위에서 제외했습니다.</p>
      </div>
    </footer>
  );
}
