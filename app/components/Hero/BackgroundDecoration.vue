<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- Animated gradient background -->
    <div class="gradient-bg"></div>

    <!-- Geometric shapes layer -->
    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>

    <!-- Floating particles -->
    <div class="particles">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
      <div class="particle particle-6"></div>
      <div class="particle particle-7"></div>
      <div class="particle particle-8"></div>
    </div>

    <!-- Glowing orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <!-- Grid overlay -->
    <div class="grid-overlay"></div>
  </div>
</template>

<style scoped>
.gradient-bg {
  @apply absolute inset-0;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(147, 51, 234, 0.1) 25%,
    rgba(236, 72, 153, 0.1) 50%,
    rgba(59, 130, 246, 0.1) 75%,
    rgba(34, 197, 94, 0.1) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Geometric shapes */
.geometric-shapes {
  @apply absolute inset-0;
}

.shape {
  @apply absolute opacity-10;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  @apply w-32 h-32 top-20 left-10;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  @apply w-24 h-24 top-40 right-20;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  animation-delay: 5s;
  animation-duration: 20s;
}

.shape-3 {
  @apply w-40 h-40 bottom-32 left-1/4;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation-delay: 10s;
  animation-duration: 30s;
}

.shape-4 {
  @apply w-28 h-28 top-1/3 right-1/3;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  animation-delay: 15s;
  animation-duration: 22s;
}

.shape-5 {
  @apply w-36 h-36 bottom-20 right-10;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  animation-delay: 8s;
  animation-duration: 28s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-20px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translateY(-40px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translateY(-20px) rotate(270deg) scale(1.05);
  }
}

/* Floating particles */
.particles {
  @apply absolute inset-0;
}

.particle {
  @apply absolute rounded-full opacity-30;
  background: radial-gradient(
    circle,
    rgba(96, 165, 250, 0.8),
    rgba(168, 85, 247, 0.4)
  );
  animation: particleFloat 12s ease-in-out infinite;
}

.particle-1 {
  @apply w-2 h-2 top-1/4 left-1/4;
  animation-delay: 0s;
}
.particle-2 {
  @apply w-3 h-3 top-1/3 right-1/4;
  animation-delay: 2s;
}
.particle-3 {
  @apply w-1 h-1 bottom-1/3 left-1/3;
  animation-delay: 4s;
}
.particle-4 {
  @apply w-2 h-2 top-1/2 right-1/3;
  animation-delay: 6s;
}
.particle-5 {
  @apply w-1 h-1 bottom-1/4 right-1/4;
  animation-delay: 8s;
}
.particle-6 {
  @apply w-3 h-3 top-3/4 left-1/2;
  animation-delay: 10s;
}
.particle-7 {
  @apply w-2 h-2 top-16 left-3/4;
  animation-delay: 1s;
}
.particle-8 {
  @apply w-1 h-1 bottom-1/2 left-16;
  animation-delay: 3s;
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-30px) translateX(10px) scale(1.2);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-60px) translateX(-10px) scale(0.8);
    opacity: 0.4;
  }
  75% {
    transform: translateY(-30px) translateX(15px) scale(1.1);
    opacity: 0.7;
  }
}

/* Glowing orbs */
.orb {
  @apply absolute rounded-full;
  filter: blur(40px);
  animation: orbPulse 8s ease-in-out infinite;
}

.orb-1 {
  @apply w-80 h-80 top-10 left-10;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.3),
    rgba(59, 130, 246, 0.1)
  );
  animation-delay: 0s;
}

.orb-2 {
  @apply w-96 h-96 top-32 right-0;
  background: radial-gradient(
    circle,
    rgba(147, 51, 234, 0.25),
    rgba(147, 51, 234, 0.05)
  );
  animation-delay: 3s;
}

.orb-3 {
  @apply w-72 h-72 bottom-0 left-1/3;
  background: radial-gradient(
    circle,
    rgba(34, 197, 94, 0.2),
    rgba(34, 197, 94, 0.05)
  );
  animation-delay: 6s;
}

@keyframes orbPulse {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2) translate(10px, -10px);
    opacity: 0.6;
  }
}

/* Grid overlay */
.grid-overlay {
  @apply absolute inset-0 opacity-5;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Additional modern effects */
@media (prefers-reduced-motion: reduce) {
  .gradient-bg,
  .shape,
  .particle,
  .orb,
  .grid-overlay {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

/* Performance optimizations */
.gradient-bg,
.shape,
.particle,
.orb {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
