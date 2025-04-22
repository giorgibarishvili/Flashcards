<template>
  <div class="flex flex-wrap gap-5 justify-center">
    <SubjectCard v-for="item in filteredQA" :key="item.id" class="m-5 !cursor-default">
      <p><strong>Q:</strong> {{ item.question }}</p>
      <p><strong>A:</strong> {{ item.answer }}</p>
    </SubjectCard>
  </div>
  <RouterLink :to="`/subject/flashcards/${path}`" class="flex justify-center mb-4">
    <Button>Start Flashcards</Button>
  </RouterLink>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import SubjectCard from '@/components/SubjectCard.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
//split to get array of items from url that can be /item/item/... -> ['/', 'item'...] and then pop to get last item from that array [subject]
const path = ref(router.currentRoute.value.path.split('/').pop() || '')
const store = useFlashcardStore()
const filteredQA = computed(() => store.flashcardsBySubject(path.value))
</script>
