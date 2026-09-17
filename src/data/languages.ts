import type { DifficultyMeta, LanguageMeta } from './types'

export const LANGUAGES: LanguageMeta[] = [
  {
    id: 'cpp',
    name: 'C++',
    tagline: '메모리와 성능을 직접 다루는 시스템 프로그래밍 언어',
    color: '#00599C',
    fileExt: 'cpp',
  },
  {
    id: 'java',
    name: 'Java',
    tagline: '객체지향과 안정성을 갖춘 엔터프라이즈 표준 언어',
    color: '#E76F00',
    fileExt: 'java',
  },
  {
    id: 'python',
    name: 'Python',
    tagline: '간결한 문법으로 빠르게 아이디어를 구현하는 언어',
    color: '#3776AB',
    fileExt: 'py',
  },
]

export const DIFFICULTIES: DifficultyMeta[] = [
  {
    id: 'easy',
    name: '쉬움',
    description: '문법과 기본기를 다지는 입문 단계',
  },
  {
    id: 'medium',
    name: '보통',
    description: '자료구조와 표준 라이브러리를 활용하는 단계',
  },
  {
    id: 'hard',
    name: '어려움',
    description: '알고리즘 설계와 최적화를 요구하는 단계',
  },
  {
    id: 'expert',
    name: '전문가',
    description: '언어 심화 기능과 실전 설계 역량을 검증하는 단계',
  },
]

export function getLanguage(id: string | undefined) {
  return LANGUAGES.find((l) => l.id === id)
}

export function getDifficulty(id: string | undefined) {
  return DIFFICULTIES.find((d) => d.id === id)
}
