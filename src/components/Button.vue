<template>
  <button
    :class="{ 'opacity-50 cursor-not-allowed hover:bg-blue-600': disabled }"
    class="p-2 bg-blue-600 cursor-pointer min-w-20 rounded-2xl hover:bg-blue-400"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>
