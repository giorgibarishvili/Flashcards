<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 m-5">
    <div
      class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
  {{ props.currentIndex + 1 }} / {{ props.filteredQA.length }}
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentIndex: number
  filteredQA: { question: string; answer: string }[]
}>()
const progress = computed(() => ((props.currentIndex + 1) / props.filteredQA.length) * 100)
</script>
