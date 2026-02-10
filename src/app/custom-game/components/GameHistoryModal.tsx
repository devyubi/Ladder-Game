"use client";

import { WinningTeamKey } from "../types/game";

interface GameHistory {
  id: string;
  winningTeam: WinningTeamKey;
  team1Name: string;
  team2Name: string;
  playedAt: string;
}

interface GameHistoryModalProps {
  isOpen: boolean;
  gameHistoryList: GameHistory[];
  onClose: () => void;
}

export function GameHistoryModal({
  isOpen,
  gameHistoryList,
  onClose,
}: GameHistoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-xl bg-slate-800 p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            📜 내전 기록
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200"
          >
            ✕
          </button>
        </div>

        {gameHistoryList.length === 0 ? (
          <p className="text-sm text-slate-400">
            아직 저장된 내전 기록이 없습니다.
          </p>
        ) : (
          <ul className="space-y-3">
            {gameHistoryList.map((game) => (
              <li
                key={game.id}
                className="rounded-lg border border-slate-700 bg-slate-900 p-4"
              >
                <p className="text-sm text-slate-300">
                  승리 팀:{" "}
                  <span className="font-semibold text-emerald-400">
                    {game.winningTeam === "team1"
                      ? game.team1Name
                      : game.team2Name}
                  </span>
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {game.playedAt}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
