<template>
  <div class="hidden md:block">
    <ul class="ml-10 flex items-baseline space-x-8" role="list">
      <li v-for="link in navigationLinks" :key="link.href">
        <a
          :href="link.href"
          class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          @click="handleNavClick"
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
  navigationLinks: NavigationLink[]
}>()

const emit = defineEmits<{
  navClick: [event: Event]
}>()

const { handleAnchorClick } = useSmoothScroll()

const handleNavClick = (event: Event) => {
  handleAnchorClick(event)
  emit('navClick', event)
}
</script>
