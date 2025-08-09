<template>
  <div class="flex justify-center lg:justify-end">
    <div class="relative">
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin"
        style="animation-duration: 3s"
      ></div>
      <div class="absolute inset-2 rounded-full bg-gray-900"></div>

      <div
        class="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800"
      >
        <div
          class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative"
        >
          <div class="relative w-full h-full">
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-800 to-purple-900"
            ></div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU33y-SNTN1O0UhJzoF3prqIXmWQr-7KT7nYMAQBg7j3-PTq1rrzn_jen6bmk05B8jKLdJwOhgckfN5ZSX5lV6vVgvnT7jKMQ-FX6uXfM5zbh9gXlgz_vCCrKkKXYbG0OTHIlf0gwQXjy6KiKNvMYPmfA6G-2_0zHdWe3A2myexRkRqYohWgm0_foc01ZxO_j0YEQS_UoJb66kHIZQGxs5CdhCNZlq5Tche5OQ9rVGDM3wKn9fcAGVt8wqn_xysQYBB4wy6cc3268"
              alt="Avatar"
              class="absolute inset-0 w-full h-full object-cover"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div
        class="absolute -top-4 -left-4 bg-gray-800 text-blue-400 px-3 py-1 rounded-md text-sm font-mono shadow-lg"
      >
        // TODO: sleep
      </div>
      <div
        class="absolute top-3/4 -right-4 md:-right-8 bg-gray-800 text-green-400 px-3 py-1 rounded-md text-sm font-mono shadow-lg"
      >
        coffee.level = 'max'
      </div>
      <div
        class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-purple-400 px-3 py-1 rounded-md text-sm font-mono shadow-lg"
      >
        ctrl+c, ctrl+v 🤫
      </div>
    </div>
  </div>
</template>
