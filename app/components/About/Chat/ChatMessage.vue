<template>
  <div class="flex gap-3" :class="message.isUser ? 'justify-end' : ''">
    <AboutChatAvatar v-if="!message.isUser" />
    <div
      class="rounded-lg p-3 max-w-xs"
      :class="{
        'bg-blue-600 text-white rounded-tr-none ml-auto': message.isUser,
        'bg-gray-700 text-gray-200 rounded-tl-none': !message.isUser,
      }"
    >
      <AboutChatTimelineMessage v-if="message.isTimeline" />
      <p v-else class="text-sm font-roboto">{{ message.text }}</p>
    </div>
    <ChatAvatar v-if="message.isUser" :is-user="true" />
  </div>
</template>

<script setup lang="ts">
interface ChatMessage {
  text: string
  isUser: boolean
  isTimeline?: boolean
}

interface Props {
  message: ChatMessage
}

const { message } = defineProps<Props>()
</script>
