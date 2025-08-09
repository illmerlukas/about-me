<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div
      class="text-3xl font-bold text-blue-400"
      aria-label="Years of experience"
    >
      {{ years }}+
    </div>
    <div class="text-sm text-gray-400">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  years?: number
  label?: string
}

const { years = 5, label = 'Years Experience' } = defineProps<Props>()
</script>
