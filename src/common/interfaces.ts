export interface Flashcard {
  id: number
  subject: string
  question: string
  answer: string
}
export interface Answer {
  id: number
  status: 'known' | 'unknown'
}
