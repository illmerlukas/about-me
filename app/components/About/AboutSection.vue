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
          <div class="relative">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"
              aria-hidden="true"
            ></div>

            <article class="relative bg-gray-700 rounded-lg p-8 shadow-2xl">
              <div class="space-y-6">
                <AboutStatsCard :years="5" label="Years Experience" />

                <hr class="w-full border-gray-600" />

                <AboutTechStack />

                <div class="text-center">
                  <div class="flex items-center justify-center space-x-2">
                    <div
                      class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      aria-hidden="true"
                    ></div>
                    <span class="text-sm text-gray-300"
                      >Available for Projects</span
                    >
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
