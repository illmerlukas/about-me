<template>
  <div class="space-y-8">
    <div class="space-y-6">
      <div
        class="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed min-h-[2.5rem]"
      >
        <span class="text-blue-400">></span>
        <span class="text-white ml-2">{{ displayedText }}</span>
        <span
          class="ml-1 text-blue-400 cursor-glow"
          :class="{ 'opacity-100': showCursor, 'opacity-0': !showCursor }"
          >|</span
        >
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span class="text-white">Lukas Illmer</span>
        <br />
        <span
          class="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal"
        >
          Full-Stack Developer
        </span>
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Explore My Work
      </button>
      <button
        class="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
      >
        Download CV
      </button>
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

/* Alternative: Matrix-style cursor */
.cursor-matrix {
  animation: matrix-blink 1s linear infinite;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px #00ff00;
}

@keyframes matrix-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* Alternative: Neon cursor */
.cursor-neon {
  animation: neon-flicker 1.5s ease-in-out infinite;
  text-shadow:
    0 0 5px #3b82f6,
    0 0 10px #3b82f6,
    0 0 15px #3b82f6,
    0 0 20px #3b82f6,
    0 0 35px #3b82f6,
    0 0 40px #3b82f6;
}

@keyframes neon-flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow:
      0 0 5px #3b82f6,
      0 0 10px #3b82f6,
      0 0 15px #3b82f6,
      0 0 20px #3b82f6,
      0 0 35px #3b82f6,
      0 0 40px #3b82f6;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

/* Alternative: RGB Shift cursor */
.cursor-rgb {
  animation: rgb-shift 0.8s ease-in-out infinite;
  position: relative;
}

@keyframes rgb-shift {
  0% {
    text-shadow:
      2px 0 0 #ff0000,
      -2px 0 0 #00ff00,
      0 2px 0 #0000ff;
  }
  25% {
    text-shadow:
      -2px 0 0 #ff0000,
      2px 0 0 #00ff00,
      0 -2px 0 #0000ff;
  }
  50% {
    text-shadow:
      0 -2px 0 #ff0000,
      0 2px 0 #00ff00,
      2px 0 0 #0000ff;
  }
  75% {
    text-shadow:
      0 2px 0 #ff0000,
      0 -2px 0 #00ff00,
      -2px 0 0 #0000ff;
  }
  100% {
    text-shadow:
      2px 0 0 #ff0000,
      -2px 0 0 #00ff00,
      0 2px 0 #0000ff;
  }
}

/* Alternative: Cyberpunk cursor */
.cursor-cyberpunk {
  animation: cyberpunk-glow 1.4s ease-in-out infinite;
  position: relative;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

@keyframes cyberpunk-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 5px #3b82f6) drop-shadow(0 0 10px #8b5cf6)
      brightness(1);
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 10px #3b82f6) drop-shadow(0 0 20px #8b5cf6)
      brightness(1.5);
    transform: scale(1.05);
  }
}
</style>
