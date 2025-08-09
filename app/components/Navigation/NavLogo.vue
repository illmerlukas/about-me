<template>
  <a
    href="#"
    class="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
    aria-label="Startseite"
    @click="handleLogoClick"
  >
    <div
      class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        class="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    </div>
  </a>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  logoClick: [event: Event]
}>()

const { scrollToTop } = useSmoothScroll()

const handleLogoClick = (event: Event) => {
  scrollToTop()
  event.preventDefault()
  emit('logoClick', event)
}
</script>
