"use client";

import { GameControlBar } from "./components/GameControlBar";
import { TeamCard } from "./components/TeamCard";
import { TeamSizeSelector } from "./components/TeamSizeSelector";
import { useCustomGameStore } from "./store/useGameStore";
import { WinningTeamKey } from "./types/game";

export default function CustomGamePage() {
  const addGameResult = useCustomGameStore(
    (state) => state.addGameResult
  );

  return (
    <main className="min-h-screen bg-[#1d1d1c] text-slate-100">
      {/* 페이지 컨테이너 */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* 헤더 */}
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight">
            내전 매니저
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            팀을 구성하고 내전 결과를 기록하세요
          </p>
        </header>

        {/* 팀 인원 설정 */}
        <section className="mb-10">
          <TeamSizeSelector />
        </section>

        {/* 팀 카드 */}
        <section className="grid gap-6 md:grid-cols-2">
          <TeamCard teamKey="team1" />
          <TeamCard teamKey="team2" />
        </section>

        {/* 게임 컨트롤 */}
        <section className="mt-12">
          <GameControlBar
            onGameFinished={(
              winningTeam: WinningTeamKey
            ) => {
              addGameResult(winningTeam);
            }}
          />
        </section>
      </div>
    </main>
  );
}
