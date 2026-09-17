import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { DIFFICULTIES, LANGUAGES } from '../data/languages'
import { getProblemsFor } from '../data/problems'
import { useProgress } from '../lib/useProgress'

export function Home() {
  const { countCompleted } = useProgress()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-h)] sm:text-5xl">
          세 언어를 순서대로 마스터하세요
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text)]">
          C++, Java, Python — 각 언어마다 쉬움 · 보통 · 어려움 · 전문가 4단계 커리큘럼으로 문법부터
          실전 설계까지 단계적으로 학습합니다.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {LANGUAGES.map((lang) => {
          const problems = getProblemsFor(lang.id)
          const done = countCompleted(problems.map((p) => p.id))
          const pct = problems.length ? (done / problems.length) * 100 : 0

          return (
            <Link
              key={lang.id}
              to={`/${lang.id}`}
              className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg text-sm font-bold text-white"
                  style={{ background: lang.color }}
                >
                  {lang.name.slice(0, 2)}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--text-h)] group-hover:text-[var(--accent)]">
                    {lang.name}
                  </h2>
                  <p className="text-xs text-[var(--text)]">{problems.length}개 문제</p>
                </div>
              </div>
              <p className="mb-4 flex-1 text-sm text-[var(--text)]">{lang.tagline}</p>
              <ProgressBar value={pct} label={`진행률 · ${done}/${problems.length}`} />
            </Link>
          )
        })}
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-semibold text-[var(--text-h)]">학습 단계</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFICULTIES.map((d, i) => (
            <div
              key={d.id}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="mb-2 text-xs font-medium text-[var(--accent)]">STEP {i + 1}</div>
              <h3 className="mb-1 font-semibold text-[var(--text-h)]">{d.name}</h3>
              <p className="text-sm text-[var(--text)]">{d.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
