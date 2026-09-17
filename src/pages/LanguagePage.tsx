import * as Tabs from '@radix-ui/react-tabs'
import { Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DifficultyBadge } from '../components/DifficultyBadge'
import { ProgressBar } from '../components/ProgressBar'
import { DIFFICULTIES, getLanguage } from '../data/languages'
import { getProblemsFor } from '../data/problems'
import type { DifficultyId } from '../data/types'
import { cn } from '../lib/utils'
import { useProgress } from '../lib/useProgress'

export function LanguagePage() {
  const { language } = useParams<{ language: string }>()
  const lang = getLanguage(language)
  const { isCompleted, countCompleted } = useProgress()

  if (!lang) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 flex items-center gap-4">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl text-base font-bold text-white"
          style={{ background: lang.color }}
        >
          {lang.name.slice(0, 2)}
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-h)]">{lang.name} 마스터하기</h1>
          <p className="text-sm text-[var(--text)]">{lang.tagline}</p>
        </div>
      </div>

      <Tabs.Root defaultValue="easy">
        <Tabs.List className="mb-6 flex flex-wrap gap-2 border-b border-[var(--border)] pb-2">
          {DIFFICULTIES.map((d) => (
            <Tabs.Trigger
              key={d.id}
              value={d.id}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text)] transition-colors',
                'data-[state=active]:bg-[var(--accent-bg)] data-[state=active]:text-[var(--accent)]',
                'hover:bg-[var(--code-bg)]',
              )}
            >
              {d.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {DIFFICULTIES.map((d) => {
          const problems = getProblemsFor(lang.id, d.id as DifficultyId)
          const done = countCompleted(problems.map((p) => p.id))
          const pct = problems.length ? (done / problems.length) * 100 : 0

          return (
            <Tabs.Content key={d.id} value={d.id} className="focus:outline-none">
              <p className="mb-3 text-sm text-[var(--text)]">{d.description}</p>
              <div className="mb-6">
                <ProgressBar value={pct} label={`${d.name} 진행률 · ${done}/${problems.length}`} />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {problems.map((p) => (
                  <Link
                    key={p.id}
                    to={`/${lang.id}/${d.id}/${p.id}`}
                    className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-shadow hover:shadow-md"
                  >
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <DifficultyBadge difficulty={d.id as DifficultyId} label={d.name} />
                        <span className="text-xs text-[var(--text)]">{p.topic}</span>
                      </div>
                      <h3 className="font-medium text-[var(--text-h)]">{p.title}</h3>
                    </div>
                    {isCompleted(p.id) && (
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        <Check size={14} />
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </Tabs.Content>
          )
        })}
      </Tabs.Root>
    </div>
  )
}
