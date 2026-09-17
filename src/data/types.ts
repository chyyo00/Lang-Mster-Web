export type LanguageId = 'cpp' | 'java' | 'python'

export type DifficultyId = 'easy' | 'medium' | 'hard' | 'expert'

export interface LanguageMeta {
  id: LanguageId
  name: string
  tagline: string
  color: string
  fileExt: string
}

export interface DifficultyMeta {
  id: DifficultyId
  name: string
  description: string
}

export interface Problem {
  id: string
  language: LanguageId
  difficulty: DifficultyId
  title: string
  topic: string
  description: string
  starterCode: string
  hint: string
  solutionCode: string
}
