<template>
  <div
    class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
    :class="{ 'bg-gray-600': !isUser, 'bg-blue-600': isUser }"
  >
    <span class="text-white text-sm">{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isUser?: boolean
}

const { isUser = false } = defineProps<Props>()

const initials = computed(() => {
  return isUser ? '👤' : 'LI'
})
</script>
