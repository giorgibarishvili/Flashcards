import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubjectsView from '@/views/SubjectsView.vue'
import FlashcardView from '@/views/FlashcardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/subject/:name',
      name: 'subject',
      component: SubjectsView,
    },
    {
      path: '/subject/flashcards/:name',
      name: 'flashcard',
      component: FlashcardView,
    },
  ],
})

export default router
