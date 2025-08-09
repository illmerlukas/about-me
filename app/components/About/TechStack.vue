<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-white text-center font-roboto-flex">
      Tech Stack
    </h4>

    <div
      v-for="category in techCategories"
      :key="category.name"
      class="space-y-2"
    >
      <h5 :class="`text-sm font-medium font-roboto ${category.color}`">
        {{ category.name }}
      </h5>
      <div
        class="flex flex-wrap gap-1"
        role="list"
        :aria-label="`${category.name} technologies`"
      >
        <span
          v-for="tech in category.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded font-roboto-mono"
          role="listitem"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechCategory {
  name: string
  color: string
  technologies: string[]
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    color: 'text-blue-400',
    technologies: ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React.js'],
  },
  {
    name: 'Backend',
    color: 'text-green-400',
    technologies: ['PHP', 'Laravel', 'WordPress', 'GraphQL'],
  },
  {
    name: 'Database',
    color: 'text-orange-400',
    technologies: ['MySQL', 'Elasticsearch'],
  },
  {
    name: 'DevOps & Tools',
    color: 'text-purple-400',
    technologies: ['GitLab', 'CI/CD', 'Docker', 'Jira'],
  },
  {
    name: 'Design',
    color: 'text-pink-400',
    technologies: ['Figma', 'Tailwind CSS'],
  },
]
</script>
