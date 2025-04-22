import { defineStore } from 'pinia'
import flashcards from '@/data/data.json'
import type { Answer, Flashcard } from '@/common/interfaces'

export const useFlashcardStore = defineStore('data', {
  state: () => ({
    data: [] as Flashcard[],
    answers: [] as Answer[],
  }),
  actions: {
    loadData() {
      this.data = flashcards
    },
    recordAnswer(id: number, status: 'known' | 'unknown') {
      this.answers.push({ id, status })
    },
    resetAnswers() {
      this.answers = []
    },
  },
  getters: {
    uniqueSubjects: (state) => {
      return state.data
        .map((item) => item.subject)
        .filter((subject, index, array) => array.indexOf(subject) === index)
    },
    flashcardsBySubject: (state) => {
      return function getSubject(item: string) {
        return state.data.filter((i) => i.subject.toLowerCase() === item.toLowerCase())
      }
    },
    answersCount: (state) => {
      const known = state.answers.filter((item) => item.status === 'known').length
      const unknown = state.answers.filter((item) => item.status === 'unknown').length
      return { known, unknown }
    },
  },
})
