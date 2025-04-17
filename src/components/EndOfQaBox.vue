<template>
  <div>
    <div class="border size-80 mt-16 mx-auto flex items-center justify-center">
      Flashcards finished!<br />
      Known: {{ answersCount.known }}, Unknown: {{ answersCount.unknown }}
    </div>
    <RouterLink to="/" @click="store.resetAnswers()">
      <Button class="mx-auto flex mt-4">New flashcards</Button>
    </RouterLink>
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
