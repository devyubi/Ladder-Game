"use client";

import { useCustomGameStore } from "../store/useGameStore";
import { PlayerInput } from "./PlayerInput";

interface TeamCardProps {
  teamKey: "team1" | "team2";
}

export function TeamCard({ teamKey }: TeamCardProps) {
  const teamPlayerCount = useCustomGameStore(
    (state) => state.teamPlayerCount
  );
  const setTeamName = useCustomGameStore(
    (state) => state.setTeamName
  );
  const setPlayerName = useCustomGameStore(
    (state) => state.setPlayerName
  );

  const teamInformation = useCustomGameStore(
    (state) => state[teamKey]
  );

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      {/* 팀 이름 */}
      <input
        className="text-xl font-bold bg-transparent border-b border-slate-600 mb-4 w-full"
        value={teamInformation.teamName}
        onChange={(event) =>
          setTeamName(teamKey, event.target.value)
        }
        placeholder="팀 이름을 입력하세요"
      />

      {/* 팀원 입력 */}
      <div className="grid gap-2">
        {Array.from({ length: teamPlayerCount }).map(
          (_, playerIndex) => (
            <PlayerInput
              key={playerIndex}
              index={playerIndex}
              value={teamInformation.playerNames[playerIndex]}
              onChange={(playerName) =>
                setPlayerName(teamKey, playerIndex, playerName)
              }
            />
          )
        )}
      </div>
    </div>
  );
}
