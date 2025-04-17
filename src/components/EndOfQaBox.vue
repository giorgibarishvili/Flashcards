<template>
  <div>
    <div
      class="mt-16 mx-auto size-80 border border-blue-300 bg-blue-50 text-center text-blue-800 font-medium rounded-xl flex flex-col items-center justify-center shadow-md p-4"
    >
      <p class="text-lg mb-2">Flashcards finished!</p>
      <p>Known: {{ answersCount.known }}, Unknown: {{ answersCount.unknown }}</p>
    </div>
    <div class="flex justify-center mt-4">
      <RouterLink to="/" @click="store.resetAnswers()">
        <Button>New flashcards</Button>
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFlashcardStore } from '@/stores/flashcardStore'
import { computed } from 'vue'
import Button from './Button.vue'
import { RouterLink } from 'vue-router'

const store = useFlashcardStore()
const answersCount = computed(() => store.answersCount)
</script>
