<template>
  <section class="min-h-screen bg-gray-900 relative overflow-hidden">
    <HeroBackgroundDecoration />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
      >
        <HeroContent />
        <HeroAvatar />
      </div>
    </div>

    <ScrollIndicator />
  </section>
</template>

<script setup lang="ts"></script>
