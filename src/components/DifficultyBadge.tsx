import type { DifficultyId } from '../data/types'
import { cn } from '../lib/utils'

const STYLES: Record<DifficultyId, string> = {
  easy: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  expert: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
}

export function DifficultyBadge({ difficulty, label }: { difficulty: DifficultyId; label: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        STYLES[difficulty],
      )}
    >
      {label}
    </span>
  )
}
