<template>
  <section
    class="min-h-[calc(100vh-4rem)] bg-gray-900 relative overflow-hidden"
  >
    <HeroBackgroundDecoration />

    <div
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[calc(100vh-4rem-8rem)]"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <HeroContent class="order-2 lg:order-1" />
        <HeroAvatar class="order-1 lg:order-2" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
