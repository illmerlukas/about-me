<template>
  <section
    id="about"
    class="py-20 bg-gray-800 relative"
    role="region"
    aria-labelledby="about-heading"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="text-center mb-16">
        <h2
          id="about-heading"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-roboto-flex"
        >
          About Me
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto" aria-hidden="true"></div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AboutContent />

        <div class="flex justify-center lg:justify-end">
          <AboutChatInteractiveChat />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
