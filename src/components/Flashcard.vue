<template>
  <div
    class="size-80 shadow-lg rounded-xl flex justify-center items-center transition-all ease-in-out duration-500"
    :class="flipped ? 'rotate-y-180 bg-blue-200' : 'bg-sky-200'"
    @click="$emit('toggle')"
  >
    <p class="font-medium" :class="props.flipped ? '-rotate-y-180' : ''">
      {{ !flipped ? props.card.question : props.card.answer }}
    </p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  card: { question: string; answer: string }
  flipped: boolean
}>()

const emit = defineEmits(['toggle'])
</script>
