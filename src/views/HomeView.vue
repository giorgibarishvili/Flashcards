<template>
  <div class="m-5 flex flex-col gap-1">
    <RouterLink
      v-for="(subject, index) in store.uniqueSubjects"
      :key="index"
      :to="`/subject/${subject.toLowerCase().split(' ').join('')}`"
    >
      <SubjectCard class="mt-5">
        {{ subject }}
      </SubjectCard>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import SubjectCard from '@/components/SubjectCard.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { RouterLink } from 'vue-router'
const store = useFlashcardStore()
</script>
