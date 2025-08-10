<template>
  <button
    :disabled="question.asked || isTyping"
    class="text-left p-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-gray-200 text-sm rounded-lg transition-all duration-200 border border-gray-600 hover:border-gray-500 disabled:border-gray-700 disabled:cursor-not-allowed font-roboto"
    :class="question.asked ? 'line-through' : 'hover:scale-[1.02]'"
    @click="$emit('ask-question', question)"
  >
    {{ question.text }}
  </button>
</template>

<script setup lang="ts">
interface Question {
  id: string
  text: string
  response: string
  asked: boolean
}

interface Props {
  question: Question
  isTyping: boolean
}

const { question, isTyping } = defineProps<Props>()

defineEmits<{
  'ask-question': [question: Question]
}>()
</script>
