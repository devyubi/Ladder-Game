interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (winningTeamKey: "team1" | "team2") => void;
}

export function ResultModal({
  isOpen,
  onClose,
  onConfirm,
}: ResultModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-lg w-80">
        <h2 className="text-lg font-bold mb-4">게임 결과 입력</h2>

        <div className="flex gap-4">
          <button
            onClick={() => onConfirm("team1")}
            className="flex-1 bg-blue-500 py-2 rounded"
          >
            팀 1 승리
          </button>
          <button
            onClick={() => onConfirm("team2")}
            className="flex-1 bg-red-500 py-2 rounded"
          >
            팀 2 승리
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-slate-400"
        >
          취소
        </button>
      </div>
    </div>
  );
}
