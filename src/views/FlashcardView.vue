<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <ProgressBar :currentIndex="currentIndex" :filteredQA="filteredQA" />
    <Flashcard :card="currentCard" :flipped="flipped" @toggle="flipped = !flipped" />
    <div class="flex gap-2 mt-5">
      <Button :disabled="currentIndex <= 0" @click="previousCard">Previous</Button>
      <Button :disabled="currentIndex >= filteredQA.length - 1" @click="nextCard">Next</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import Flashcard from '@/components/Flashcard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const path = ref(router.currentRoute.value.path.split('/').pop() || '')
const store = useFlashcardStore()
const filteredQA = computed(() => store.flashcardSubjects(path.value))
const currentIndex = ref(0)
const currentCard = computed(() => filteredQA.value[currentIndex.value])
const flipped = ref(false)

function nextCard() {
  if (currentIndex.value < filteredQA.value.length - 1) {
    currentIndex.value++
    flipped.value = false
    console.log(currentIndex.value)
  }
}
function previousCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    flipped.value = false
    console.log(currentIndex.value)
  }
}
</script>
