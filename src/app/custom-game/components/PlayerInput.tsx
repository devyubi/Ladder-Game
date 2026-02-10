interface PlayerInputProps {
  value: string;
  onChange: (value: string) => void;
  index: number;
}

export function PlayerInput({
  value,
  onChange,
  index,
}: PlayerInputProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 transition focus-within:border-emerald-400/60 focus-within:shadow-emerald-400/20">
      {/* 슬롯 번호 */}
      <span className="w-6 text-center text-sm font-semibold text-slate-500">
        {index + 1}
      </span>

      {/* 입력 */}
      <input
        className="
          flex-1 bg-transparent text-sm text-slate-100 outline-none
          placeholder:text-slate-500
        "
        placeholder="소환사 이름 입력"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
