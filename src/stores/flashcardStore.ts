import { defineStore } from 'pinia'
import flashcards from '@/data/data.json'
import type { Flashcard } from '@/common/interfaces'

export const useFlashcardStore = defineStore('data', {
  state: () => ({
    data: [] as Flashcard[],
  }),
  actions: {
    loadData() {
      this.data = flashcards
    },
  },
  getters: {
    uniqueSubjects: (state) => {
      return state.data
        .map((item) => item.subject)
        .filter((subject, index, array) => array.indexOf(subject) === index)
    },
    flashcardSubjects: (state) => {
      return function getSubject(item: string) {
        return state.data.filter((i) => i.subject.toLowerCase() === item.toLowerCase())
      }
    },
  },
})
