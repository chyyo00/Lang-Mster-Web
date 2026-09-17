import * as Progress from '@radix-ui/react-progress'

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 flex items-center justify-between text-xs text-[var(--text)]">
          <span>{label}</span>
          <span>{Math.round(value)}%</span>
        </div>
      )}
      <Progress.Root
        className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--code-bg)]"
        value={value}
      >
        <Progress.Indicator
          className="h-full rounded-full bg-[var(--accent)] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </Progress.Root>
    </div>
  )
}
