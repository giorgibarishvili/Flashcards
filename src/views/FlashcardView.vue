<template>
  <div v-if="finished" class="grid">
    <EndOfQaBox />
  </div>

  <div v-else class="flex flex-col justify-center items-center mt-10">
    <ProgressBar :currentIndex="currentIndex" :filteredQA="filteredQA" />
    <Flashcard :card="currentCard" :flipped="flipped" @toggle="flipped = !flipped" />
    <div class="flex gap-2 mt-5">
      <Button @click="unknownAnswer">Unknown</Button>
      <Button @click="knownAnswer"> Known </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import EndOfQaBox from '@/components/EndOfQaBox.vue'
import Flashcard from '@/components/Flashcard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { useFlashcardStore } from '@/stores/flashcardStore'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const path = ref(router.currentRoute.value.path.split('/').pop() || '')
const store = useFlashcardStore()
const filteredQA = computed(() => store.flashcardsBySubject(path.value))
const currentIndex = ref(0)
const currentCard = computed(() => filteredQA.value[currentIndex.value])
const flipped = ref(false)
const finished = ref(false)

function knownAnswer() {
  //adding question status to store
  store.recordAnswer(currentCard.value.id, 'known')
  // moving to next question until it reaches the last in array
  if (currentIndex.value !== filteredQA.value.length - 1) {
    currentIndex.value++
  } else {
    finished.value = true
  }
  flipped.value = false
}
function unknownAnswer() {
  //adding question status to store
  store.recordAnswer(currentCard.value.id, 'unknown')
  // moving to next question until it reaches the last in array
  if (currentIndex.value !== filteredQA.value.length - 1) {
    currentIndex.value++
  } else {
    finished.value = true
  }
  flipped.value = false
}
onMounted(() => {
  store.resetAnswers()
})
</script>
