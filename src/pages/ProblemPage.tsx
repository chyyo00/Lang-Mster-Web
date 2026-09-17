import * as Accordion from '@radix-ui/react-accordion'
import { Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CodeBlock } from '../components/CodeBlock'
import { DifficultyBadge } from '../components/DifficultyBadge'
import { getDifficulty, getLanguage } from '../data/languages'
import { getProblemsFor } from '../data/problems'
import type { DifficultyId } from '../data/types'
import { cn } from '../lib/utils'
import { useProgress } from '../lib/useProgress'

export function ProblemPage() {
  const { language, difficulty, problemId } = useParams<{
    language: string
    difficulty: string
    problemId: string
  }>()
  const lang = getLanguage(language)
  const diff = getDifficulty(difficulty)
  const { isCompleted, toggle } = useProgress()

  if (!lang || !diff) return <Navigate to="/" replace />

  const problems = getProblemsFor(lang.id, diff.id as DifficultyId)
  const index = problems.findIndex((p) => p.id === problemId)
  const problem = problems[index]

  if (!problem) return <Navigate to={`/${lang.id}`} replace />

  const prev = problems[index - 1]
  const next = problems[index + 1]
  const done = isCompleted(problem.id)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text)]">
        <Link to={`/${lang.id}`} className="hover:text-[var(--accent)]">
          {lang.name}
        </Link>
        <span>/</span>
        <Link to={`/${lang.id}`} className="hover:text-[var(--accent)]">
          {diff.name}
        </Link>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <DifficultyBadge difficulty={diff.id as DifficultyId} label={diff.name} />
        <span className="text-xs text-[var(--text)]">{problem.topic}</span>
      </div>

      <h1 className="mb-4 text-2xl font-semibold text-[var(--text-h)]">{problem.title}</h1>

      <p className="mb-6 text-[var(--text)]">{problem.description}</p>

      <div className="mb-6">
        <h2 className="mb-2 text-sm font-semibold text-[var(--text-h)]">시작 코드</h2>
        <CodeBlock code={problem.starterCode} />
      </div>

      <Accordion.Root type="multiple" className="mb-8 space-y-2">
        <Accordion.Item
          value="hint"
          className="overflow-hidden rounded-lg border border-[var(--border)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[var(--text-h)] hover:bg-[var(--code-bg)]">
              힌트 보기
              <ChevronDown
                size={16}
                className="transition-transform group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 pb-4 text-sm text-[var(--text)]">
            {problem.hint}
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="solution"
          className="overflow-hidden rounded-lg border border-[var(--border)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[var(--text-h)] hover:bg-[var(--code-bg)]">
              모범 답안 보기
              <ChevronDown
                size={16}
                className="transition-transform group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 pb-4">
            <CodeBlock code={problem.solutionCode} />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => toggle(problem.id)}
          className={cn(
            'flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
            done
              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
              : 'bg-[var(--accent)] text-white hover:opacity-90',
          )}
        >
          <Check size={16} />
          {done ? '완료됨' : '완료로 표시'}
        </button>

        <div className="flex gap-2">
          {prev && (
            <Link
              to={`/${lang.id}/${diff.id}/${prev.id}`}
              className="flex items-center gap-1 rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--code-bg)]"
            >
              <ChevronLeft size={16} /> 이전
            </Link>
          )}
          {next && (
            <Link
              to={`/${lang.id}/${diff.id}/${next.id}`}
              className="flex items-center gap-1 rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--code-bg)]"
            >
              다음 <ChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
