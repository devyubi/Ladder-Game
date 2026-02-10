"use client";

import { WinningTeamKey } from "../types/game";

interface GameControlBarProps {
  onGameFinished: (winningTeam: WinningTeamKey) => void;
}

export function GameControlBar({
  onGameFinished,
}: GameControlBarProps) {
  const handleTeam1Win = () => {
    onGameFinished("team1");
  };

  const handleTeam2Win = () => {
    onGameFinished("team2");
  };

  return (
    <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
      {/* 타이틀 */}
      <p className="mb-4 text-sm font-semibold text-slate-400">
        게임 결과 입력
      </p>

      {/* 버튼 영역 */}
      <div className="flex gap-4">
        {/* 팀 1 */}
        <button
          onClick={handleTeam1Win}
          className="
            flex-1 rounded-lg border border-blue-500/40
            bg-blue-600/90 py-4 text-lg font-bold text-white
            transition
            hover:bg-blue-500
            hover:shadow-blue-500/40
            active:scale-[0.98]
          "
        >
          BLUE 승리
        </button>

        {/* 팀 2 */}
        <button
          onClick={handleTeam2Win}
          className="
            flex-1 rounded-lg border border-red-500/40
            bg-red-600/90 py-4 text-lg font-bold text-white
            transition
            hover:bg-red-500
            hover:shadow-red-500/40
            active:scale-[0.98]
          "
        >
          RED 승리
        </button>
      </div>
    </div>
  );
}
