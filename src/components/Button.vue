<template>
  <button
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    class="p-2 bg-blue-600 cursor-pointer min-w-20 rounded-2xl"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>
