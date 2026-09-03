<template>
  <div class="space-y-8">
    <div class="space-y-6">
      <div
        class="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed min-h-[2.5rem] font-roboto-mono"
      >
        <span class="text-blue-400">></span>
        <span class="text-white ml-2">{{ displayedText }}</span>
        <span
          class="ml-1 text-blue-400 cursor-glow"
          :class="{ 'opacity-100': showCursor, 'opacity-0': !showCursor }"
          >|</span
        >
      </div>

      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-roboto-flex"
      >
        <span class="text-white">Lukas Illmer</span>
        <br />
        <span
          class="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal font-roboto"
        >
          Full-Stack Developer
        </span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const introText =
  'Hi, I am Lukas, a full stack developer building seamless digital experiences, front to back.'
const displayedText = ref('')
const showCursor = ref(true)
const currentIndex = ref(0)

const startTyping = () => {
  const typingInterval = setInterval(() => {
    if (currentIndex.value < introText.length) {
      displayedText.value += introText[currentIndex.value]
      currentIndex.value++
    } else {
      clearInterval(typingInterval)
      // Stop cursor blinking after typing is complete
      setTimeout(() => {
        showCursor.value = false
      }, 1000)
    }
  }, 50)
}

const startCursorBlink = () => {
  setInterval(() => {
    if (showCursor.value && currentIndex.value >= introText.length) return
    showCursor.value = !showCursor.value
  }, 530)
}

onMounted(() => {
  setTimeout(() => {
    startTyping()
    startCursorBlink()
  }, 500)
})
</script>

<style scoped>
/* Glowing cursor with pulsing effect */
.cursor-glow {
  animation: glow-pulse 1.2s ease-in-out infinite;
  text-shadow:
    0 0 5px currentColor,
    0 0 10px currentColor,
    0 0 15px currentColor,
    0 0 20px #3b82f6;
  filter: brightness(1.2);
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
    text-shadow:
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor,
      0 0 20px #3b82f6;
  }
  50% {
    opacity: 0.3;
    transform: scale(0.95);
    text-shadow:
      0 0 2px currentColor,
      0 0 5px currentColor,
      0 0 8px currentColor,
      0 0 12px #3b82f6;
  }
}
</style>
