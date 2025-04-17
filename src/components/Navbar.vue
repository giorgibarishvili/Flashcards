<template>
  <nav class="w-full bg-blue-700 text-white shadow-md">
    <div class="flex items-center h-12">
      <RouterLink
        to="/"
        @click="store.resetAnswers()"
        class="inline-flex items-center font-semibold italic hover:text-blue-200 transition-colors"
      >
        <LogoIcon class="size-10 ms-5 me-2" /> Flashcards
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import LogoIcon from '@/assets/icons/Logo-icon.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { RouterLink } from 'vue-router'

const store = useFlashcardStore()
</script>
