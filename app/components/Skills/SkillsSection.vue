<template>
  <section
    id="skills"
    class="py-20 bg-gray-900 relative"
    role="region"
    aria-labelledby="skills-heading"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="text-center mb-16">
        <h2
          id="skills-heading"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-roboto-flex"
        >
          Skills & Technologies
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto" aria-hidden="true"></div>
        <p class="text-gray-300 text-lg mt-6 max-w-2xl mx-auto font-roboto">
          Tools and frameworks I use to build great products
        </p>
      </header>

      <div class="flex justify-center">
        <div class="relative max-w-4xl w-full">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"
            aria-hidden="true"
          ></div>

          <article
            class="relative bg-gray-800 rounded-lg p-8 md:p-12 shadow-2xl"
          >
            <SkillsTechStack />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
