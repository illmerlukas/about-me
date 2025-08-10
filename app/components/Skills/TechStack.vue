<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    <div
      v-for="(category, categoryIndex) in techCategories"
      :key="category.name"
      :style="{ 'animation-delay': `${categoryIndex * 150}ms` }"
      class="group animate-fade-in-up bg-gray-800/30 rounded-xl p-6 border border-gray-700/20 hover:bg-gray-800/50 hover:border-gray-600/30 transition-all duration-300"
    >
      <div class="flex items-center gap-3 mb-5">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-medium transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
          :class="category.iconBg"
        >
          {{ category.icon }}
        </div>
        <div class="flex-1">
          <h3
            :class="`text-lg font-bold font-roboto-flex ${category.color} group-hover:text-white transition-colors duration-300`"
          >
            {{ category.name }}
          </h3>
          <div
            class="w-0 h-0.5 mt-2 rounded-full transition-all duration-500 group-hover:w-16"
            :class="getUnderlineColor(category.color)"
          ></div>
        </div>
      </div>

      <div class="space-y-2">
        <div
          v-for="(tech, techIndex) in category.technologies"
          :key="tech"
          :style="{
            'animation-delay': `${categoryIndex * 150 + techIndex * 100}ms`,
          }"
          class="group/tech animate-fade-in-scale"
        >
          <div
            class="relative px-4 py-3 bg-gray-700/40 hover:bg-gray-600/60 border border-gray-600/30 hover:border-gray-500/50 rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg overflow-hidden"
          >
            <div
              class="absolute inset-0 -translate-x-full group-hover/tech:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            ></div>

            <h4
              class="font-roboto-mono text-sm font-medium text-gray-300 group-hover/tech:text-white transition-colors duration-300 relative z-10"
            >
              {{ tech }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechCategory {
  name: string
  color: string
  icon: string
  iconBg: string
  gradientClass: string
  glowClass: string
  technologies: string[]
}

// Helper function to convert text color to background color
const getUnderlineColor = (textColor: string): string => {
  const colorMap: Record<string, string> = {
    'text-blue-400': 'bg-blue-400',
    'text-green-400': 'bg-green-400',
    'text-orange-400': 'bg-orange-400',
    'text-purple-400': 'bg-purple-400',
    'text-pink-400': 'bg-pink-400',
  }
  return colorMap[textColor] || textColor.replace('text-', 'bg-')
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    color: 'text-blue-400',
    icon: '🎨',
    iconBg: 'bg-blue-500/20 text-blue-400',
    gradientClass: 'from-blue-500/30 to-cyan-500/30',
    glowClass: 'bg-blue-500/50',
    technologies: ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React.js'],
  },
  {
    name: 'Backend',
    color: 'text-green-400',
    icon: '⚡',
    iconBg: 'bg-green-500/20 text-green-400',
    gradientClass: 'from-green-500/30 to-emerald-500/30',
    glowClass: 'bg-green-500/50',
    technologies: ['PHP', 'Laravel', 'WordPress', 'GraphQL'],
  },
  {
    name: 'Database',
    color: 'text-orange-400',
    icon: '🗄️',
    iconBg: 'bg-orange-500/20 text-orange-400',
    gradientClass: 'from-orange-500/30 to-yellow-500/30',
    glowClass: 'bg-orange-500/50',
    technologies: ['MySQL', 'Elasticsearch'],
  },
  {
    name: 'DevOps & Tools',
    color: 'text-purple-400',
    icon: '🛠️',
    iconBg: 'bg-purple-500/20 text-purple-400',
    gradientClass: 'from-purple-500/30 to-pink-500/30',
    glowClass: 'bg-purple-500/50',
    technologies: ['GitLab', 'CI/CD', 'Docker', 'Jira'],
  },
  {
    name: 'Design',
    color: 'text-pink-400',
    icon: '✨',
    iconBg: 'bg-pink-500/20 text-pink-400',
    gradientClass: 'from-pink-500/30 to-rose-500/30',
    glowClass: 'bg-pink-500/50',
    technologies: ['Figma', 'Tailwind CSS'],
  },
]
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.4s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.3s ease-out forwards;
  opacity: 0;
}
</style>
