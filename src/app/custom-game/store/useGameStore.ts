import { create } from "zustand";
import { persist } from "zustand/middleware";

type TeamInformation = {
  teamName: string;
  playerNames: string[];
};

type CustomGameRecord = {
  winningTeam: "team1" | "team2";
  playedAt: string;
  team1: TeamInformation;
  team2: TeamInformation;
};

interface CustomGameState {
  teamPlayerCount: number;

  team1: TeamInformation;
  team2: TeamInformation;

  gameHistoryList: CustomGameRecord[];

  setTeamPlayerCount: (playerCount: number) => void;
  setTeamName: (teamKey: "team1" | "team2", teamName: string) => void;
  setPlayerName: (
    teamKey: "team1" | "team2",
    playerIndex: number,
    playerName: string
  ) => void;

  addGameResult: (winningTeam: "team1" | "team2") => void;
  resetAllGameData: () => void;
}

export const useCustomGameStore = create<CustomGameState>()(
  persist(
    (set, get) => ({
      teamPlayerCount: 5,

      team1: {
        teamName: "TEAM A",
        playerNames: Array(5).fill(""),
      },

      team2: {
        teamName: "TEAM B",
        playerNames: Array(5).fill(""),
      },

      gameHistoryList: [],

      setTeamPlayerCount: (playerCount) =>
        set({
          teamPlayerCount: playerCount,
          team1: {
            teamName: "TEAM A",
            playerNames: Array(playerCount).fill(""),
          },
          team2: {
            teamName: "TEAM B",
            playerNames: Array(playerCount).fill(""),
          },
        }),

      setTeamName: (teamKey, teamName) =>
        set((currentState) => ({
          ...currentState,
          [teamKey]: {
            ...currentState[teamKey],
            teamName,
          },
        })),

      setPlayerName: (teamKey, playerIndex, playerName) =>
        set((currentState) => {
          const updatedPlayerNames = [
            ...currentState[teamKey].playerNames,
          ];
          updatedPlayerNames[playerIndex] = playerName;

          return {
            ...currentState,
            [teamKey]: {
              ...currentState[teamKey],
              playerNames: updatedPlayerNames,
            },
          };
        }),

      addGameResult: (winningTeam) =>
        set((currentState) => ({
          gameHistoryList: [
            {
              winningTeam,
              playedAt: new Date().toISOString(),
              team1: currentState.team1,
              team2: currentState.team2,
            },
            ...currentState.gameHistoryList,
          ],
        })),

      resetAllGameData: () =>
        set({
          teamPlayerCount: 5,
          team1: {
            teamName: "TEAM A",
            playerNames: Array(5).fill(""),
          },
          team2: {
            teamName: "TEAM B",
            playerNames: Array(5).fill(""),
          },
          gameHistoryList: [],
        }),
    }),
    {
      name: "custom-game-storage",
    }
  )
);
