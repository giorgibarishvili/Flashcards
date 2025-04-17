<template>
  <header>
    <Navbar />
  </header>
  <div class="size-full">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import { useFlashcardStore } from './stores/flashcardStore'

const store = useFlashcardStore()
onMounted(() => {
  store.loadData()
})
</script>
