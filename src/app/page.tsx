import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 text-center">
        {/* 타이틀 */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          행복한 마을
          <span className="block text-emerald-400">
            내전 팀 매니저
          </span>
        </h1>

        {/* 설명 */}
        <p className="mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
          친구들과 내전을 할 때 팀 구성부터
          <br />
          결과 기록까지 한 번에 관리하세요
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/custom-game"
            className="
              inline-flex items-center gap-2 rounded-xl
              bg-emerald-400 px-8 py-4
              text-lg font-bold text-black
              transition
              hover:scale-[1.03]
              hover:shadow-emerald-400/40
              active:scale-[0.97]
            "
          >
            🎮 내전 게임 만들기
          </Link>
        </div>

        {/* 서브 정보 */}
        <p className="mt-6 text-xs text-slate-500">
          로그인 없이 바로 시작 가능
        </p>
      </div>
    </main>
  );
}
