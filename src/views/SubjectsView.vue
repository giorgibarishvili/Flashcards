<template>
  <div class="flex">
    <SubjectCard v-for="item in filteredQA" :key="item.id" class="m-5">
      <p><strong>Q:</strong> {{ item.question }}</p>
      <p><strong>A:</strong> {{ item.answer }}</p>
    </SubjectCard>
  </div>
  <RouterLink :to="`/subject/flashcards/${path}`">
    <Button>Next</Button>
  </RouterLink>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import SubjectCard from '@/components/SubjectCard.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const path = ref(router.currentRoute.value.path.split('/').pop() || '')
//split to get array of items from url that can be /item/item/... and then pop to get last item from that array
const store = useFlashcardStore()
const filteredQA = computed(() => store.flashcardSubjects(path.value))
</script>
