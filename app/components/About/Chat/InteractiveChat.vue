<template>
  <div class="relative max-w-lg w-full mx-auto">
    <div class="relative">
      <div
        class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"
        aria-hidden="true"
      ></div>

      <div class="relative bg-gray-800 rounded-lg p-6 shadow-2xl">
        <div
          ref="chatContainer"
          class="space-y-4 mb-6 max-h-60 overflow-y-auto pr-3"
        >
          <div class="flex gap-3">
            <AboutChatAvatar />
            <div class="bg-gray-700 rounded-lg rounded-tl-none p-3 max-w-xs">
              <p class="text-gray-200 text-sm font-roboto">
                Hi! I'm Lukas. Feel free to ask me anything about my background,
                interests, or experience!
              </p>
            </div>
          </div>

          <AboutChatMessage
            v-for="(message, index) in chatMessages"
            :key="index"
            :message="message"
          />

          <AboutChatTypingIndicator v-if="isTyping" />
        </div>

        <div class="space-y-2">
          <p class="text-gray-400 text-xs font-roboto-mono mb-3">
            Quick questions:
          </p>
          <div class="grid grid-cols-1 gap-2">
            <AboutChatQuestionButton
              v-for="question in availableQuestions"
              :key="question.id"
              :question="question"
              :is-typing="isTyping"
              @ask-question="askQuestion"
            />
          </div>
        </div>

        <div
          v-if="chatMessages.length > 0"
          class="mt-4 pt-4 border-t border-gray-600"
        >
          <button
            class="w-full text-gray-400 hover:text-white text-sm py-2 px-4 border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200 font-roboto"
            @click="resetChat"
          >
            Start over
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Question {
  id: string
  text: string
  response: string
  asked: boolean
}

interface ChatMessage {
  text: string
  isUser: boolean
  isTimeline?: boolean
}

const chatMessages = ref<ChatMessage[]>([])
const isTyping = ref(false)
const chatContainer = ref<HTMLElement>()

const questions: Question[] = [
  {
    id: 'background',
    text: "What's your professional background?",
    response: '',
    asked: false,
  },
  {
    id: 'interests',
    text: 'What is your favorite anime?',
    response:
      "There are many great anime series out there, some of my favorites are 'Attack on Titan', 'Naruto', and 'Demon Slayer'.",
    asked: false,
  },
]

const availableQuestions = ref<Question[]>([...questions])

const askQuestion = async (question: Question) => {
  if (question.asked) return

  chatMessages.value.push({
    text: question.text,
    isUser: true,
  })

  question.asked = true
  isTyping.value = true

  await nextTick()
  scrollToBottom()

  setTimeout(
    () => {
      isTyping.value = false

      chatMessages.value.push({
        text: question.response,
        isUser: false,
        isTimeline: question.id === 'background',
      })

      // Scroll to bottom after response
      nextTick(() => scrollToBottom())
    },
    2000 + Math.random() * 1000
  )
}

const resetChat = () => {
  chatMessages.value = []
  availableQuestions.value = questions.map(q => ({ ...q, asked: false }))
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}
</script>
