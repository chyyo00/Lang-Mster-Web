import type { DifficultyId, LanguageId, Problem } from '../types'
import { CPP_PROBLEMS } from './cpp'
import { JAVA_PROBLEMS } from './java'
import { PYTHON_PROBLEMS } from './python'

export const ALL_PROBLEMS: Problem[] = [...CPP_PROBLEMS, ...JAVA_PROBLEMS, ...PYTHON_PROBLEMS]

export function getProblemsFor(language: LanguageId, difficulty?: DifficultyId): Problem[] {
  return ALL_PROBLEMS.filter(
    (p) => p.language === language && (difficulty ? p.difficulty === difficulty : true),
  )
}

export function getProblem(id: string): Problem | undefined {
  return ALL_PROBLEMS.find((p) => p.id === id)
}
