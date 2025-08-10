<template>
  <div class="space-y-6">
    <div
      v-for="(skillArea, areaIndex) in skillAreas"
      :key="skillArea.name"
      :style="{ 'animation-delay': `${areaIndex * 100}ms` }"
      class="group animate-fade-in-up"
    >
      <!-- Skill area header -->
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-medium transition-all duration-300 group-hover:scale-105"
          :class="skillArea.iconBg"
        >
          {{ skillArea.icon }}
        </div>
        <div class="flex-1">
          <h3
            :class="`text-lg font-semibold font-roboto-flex ${skillArea.color} group-hover:text-white transition-colors duration-300`"
          >
            {{ skillArea.name }}
          </h3>
          <div
            class="w-0 h-0.5 mt-2 rounded-full transition-all duration-500 group-hover:w-12"
            :class="skillArea.color.replace('text-', 'bg-')"
          ></div>
        </div>
      </div>

      <!-- Skills in this area -->
      <div class="ml-12 space-y-3">
        <div
          v-for="(skill, skillIndex) in skillArea.skills"
          :key="skill.name"
          :style="{
            'animation-delay': `${areaIndex * 100 + skillIndex * 50}ms`,
          }"
          class="group/skill animate-fade-in-scale"
        >
          <!-- Skill with proficiency indicator -->
          <div
            class="flex items-center justify-between bg-gray-800/60 border border-gray-700/40 rounded-lg p-4 hover:bg-gray-700/60 hover:border-gray-600/60 transition-all duration-300"
          >
            <div class="flex-1">
              <h4
                class="font-roboto-mono text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300"
              >
                {{ skill.name }}
              </h4>
              <p class="text-xs text-gray-500 mt-1 font-roboto">
                {{ skill.description }}
              </p>
            </div>

            <!-- Proficiency level -->
            <div class="flex items-center gap-2 ml-4">
              <div class="flex gap-1">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="
                    i <= skill.level
                      ? skillArea.color.replace('text-', 'bg-')
                      : 'bg-gray-600'
                  "
                ></div>
              </div>
              <span class="text-xs text-gray-500 font-roboto-mono">
                {{ skill.level }}/5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  description: string
  level: number // 1-5 proficiency level
}

interface SkillArea {
  name: string
  color: string
  icon: string
  iconBg: string
  skills: Skill[]
}

const skillAreas: SkillArea[] = [
  {
    name: 'Frontend Development',
    color: 'text-blue-400',
    icon: '💻',
    iconBg: 'bg-blue-500/20 text-blue-400',
    skills: [
      {
        name: 'Modern JavaScript/TypeScript',
        description: 'ES6+, async/await, modules, type safety',
        level: 5,
      },
      {
        name: 'Vue.js & Nuxt.js',
        description: 'Composition API, SSR, state management',
        level: 5,
      },
      {
        name: 'React.js & Next.js',
        description: 'Hooks, context, server components',
        level: 4,
      },
      {
        name: 'CSS & Responsive Design',
        description: 'Flexbox, Grid, mobile-first approach',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend Development',
    color: 'text-green-400',
    icon: '⚙️',
    iconBg: 'bg-green-500/20 text-green-400',
    skills: [
      {
        name: 'PHP & Laravel',
        description: 'MVC, Eloquent ORM, API development',
        level: 5,
      },
      {
        name: 'WordPress Development',
        description: 'Custom themes, plugins, ACF',
        level: 4,
      },
      {
        name: 'API Design & Integration',
        description: 'REST, GraphQL, authentication',
        level: 4,
      },
      {
        name: 'Database Design',
        description: 'MySQL optimization, relationships',
        level: 4,
      },
    ],
  },
  {
    name: 'DevOps & Workflow',
    color: 'text-purple-400',
    icon: '🚀',
    iconBg: 'bg-purple-500/20 text-purple-400',
    skills: [
      {
        name: 'Version Control',
        description: 'Git workflows, branching strategies',
        level: 5,
      },
      {
        name: 'CI/CD Pipelines',
        description: 'GitLab CI, automated testing & deployment',
        level: 4,
      },
      {
        name: 'Docker & Containerization',
        description: 'Multi-stage builds, orchestration',
        level: 3,
      },
      {
        name: 'Project Management',
        description: 'Agile, Scrum, Jira, stakeholder communication',
        level: 4,
      },
    ],
  },
  {
    name: 'Design & UX',
    color: 'text-pink-400',
    icon: '🎨',
    iconBg: 'bg-pink-500/20 text-pink-400',
    skills: [
      {
        name: 'UI/UX Design',
        description: 'User-centered design, wireframing',
        level: 4,
      },
      {
        name: 'Design Systems',
        description: 'Component libraries, design tokens',
        level: 4,
      },
      {
        name: 'Prototyping',
        description: 'Figma, interactive prototypes',
        level: 3,
      },
      {
        name: 'Accessibility',
        description: 'WCAG guidelines, semantic HTML',
        level: 4,
      },
    ],
  },
]
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
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
