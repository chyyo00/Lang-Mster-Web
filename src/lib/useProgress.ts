import { useCallback, useState } from 'react'

const STORAGE_KEY = 'lang-mster-progress'

function readStore(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeStore(data: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // ignore write errors (private mode, quota, etc.)
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => readStore())

  const isCompleted = useCallback((id: string) => !!completed[id], [completed])

  const toggle = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      if (!next[id]) delete next[id]
      writeStore(next)
      return next
    })
  }, [])

  const countCompleted = useCallback(
    (ids: string[]) => ids.filter((id) => completed[id]).length,
    [completed],
  )

  return { completed, isCompleted, toggle, countCompleted }
}
