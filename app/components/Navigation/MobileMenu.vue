<template>
  <div
    v-if="isOpen"
    class="md:hidden"
    role="region"
    aria-label="Mobile Navigationsmenü"
  >
    <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800" role="list">
      <li v-for="link in navigationLinks" :key="`mobile-${link.href}`">
        <a
          :href="link.href"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          @click="handleMobileNavClick"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface NavigationLink {
  href: string
  label: string
}

defineProps<{
  isOpen: boolean
  navigationLinks: NavigationLink[]
}>()

const emit = defineEmits<{
  close: []
  navClick: [event: Event]
}>()

const { handleAnchorClick } = useSmoothScroll()

const handleMobileNavClick = (event: Event) => {
  handleAnchorClick(event)
  emit('close')
  emit('navClick', event)
}
</script>
