"use client";

import { useCustomGameStore } from "../store/useGameStore";

export function TeamSizeSelector() {
  const teamPlayerCount = useCustomGameStore(
    (state) => state.teamPlayerCount
  );
  const setTeamPlayerCount = useCustomGameStore(
    (state) => state.setTeamPlayerCount
  );

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-md">
      {/* 타이틀 */}
      <p className="mb-3 text-sm font-semibold text-slate-400">
        팀 인원 설정
      </p>

      {/* 버튼 그룹 */}
      <div className="flex gap-2">
        {[3, 4, 5].map((playerCount) => {
          const isSelected =
            teamPlayerCount === playerCount;

          return (
            <button
              key={playerCount}
              onClick={() =>
                setTeamPlayerCount(playerCount)
              }
              className={`
                flex-1 rounded-lg border py-3 text-base font-bold transition
                ${
                  isSelected
                    ? "border-emerald-400 bg-emerald-400 text-black shadow-emerald-400/30"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500"
                }
              `}
            >
              {playerCount} : {playerCount}
            </button>
          );
        })}
      </div>
    </section>
  );
}
