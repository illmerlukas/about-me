<template>
  <div
    class="flex items-center space-x-4"
    role="group"
    aria-label="Social Media Links"
  >
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      class="text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      :aria-label="social.ariaLabel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        :aria-hidden="true"
      >
        <path :d="social.path" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string
  url: string
  ariaLabel: string
  path: string
}

defineProps<{
  socialLinks: SocialLink[]
}>()
</script>
