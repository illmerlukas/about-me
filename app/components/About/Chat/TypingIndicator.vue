<template>
  <div class="flex gap-3">
    <AboutChatChatAvatar />
    <div class="bg-gray-700 rounded-lg rounded-tl-none p-3">
      <div class="flex gap-1">
        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div
          class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style="animation-delay: 0.1s"
        ></div>
        <div
          class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style="animation-delay: 0.2s"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
