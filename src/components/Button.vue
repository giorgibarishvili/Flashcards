<template>
  <button
    :disabled="disabled"
    :class="[
      'p-2 min-w-40 rounded-2xl transition-all duration-200 font-medium text-shadow-black text-shadow-sm text-white',
      disabled
        ? 'bg-blue-600 opacity-50 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-400 cursor-pointer',
    ]"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>
