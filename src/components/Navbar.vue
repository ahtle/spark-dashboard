<template>
  <nav
    class="flex items-center justify-between w-full h-16 px-6 text-white bg-white border-b border-gray-200 bg-blue-spark"
  >
    <!-- top nav -->
    <div class="flex items-center">
      <button aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <router-link to="/" class="ml-8">
        <img
          src="/images/spark-logo-white.svg"
          href="Spark logo"
          class="h-10"
        />
      </router-link>
    </div>

    <div class="overflow-hidden rounded-full">
      <img src="/images/batman.png" href="Profile pic" class="w-12 h-12" />
    </div>

    <!-- side nav -->
    <aside
      class="fixed top-0 left-0 z-10 w-64 h-full overflow-auto text-gray-500 transition-all duration-300 ease-in-out transform bg-white shadow"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- logo -->
      <div
        @click="isOpen = false"
        class="flex items-center justify-center w-full p-4 mb-10 cursor-pointer"
      >
        <img src="/images/spark-logo.svg" alt="Spark logo" />
      </div>

      <!-- navs -->
      <router-link
        to="/"
        class="flex items-center p-4 text-lg transition hover:bg-indigo-500 hover:text-white"
        :class="$route.name === 'Home' ? 'bg-gray-100 color-blue-spark' : ''"
      >
        <font-awesome-icon icon="table" class="mr-4" />
        <span>Dashboard</span>
      </router-link>

      <router-link
        to="/"
        class="flex items-center p-4 text-lg transition hover:bg-indigo-500 hover:text-white"
        :class="
          $route.name === 'Contacts' ? 'bg-gray-100 color-blue-spark' : ''
        "
      >
        <font-awesome-icon icon="user-circle" class="mr-4" />
        <span>Contacts</span>
      </router-link>

      <!-- bottom -->
      <div class="fixed bottom-0 w-full px-8 py-5 bg-gray-50">
        <p class="mb-2">Spark Account Manager</p>
        <p class="mb-2">
          <a class="text-lg" href="mailto:anh.ht.le@gmail.com"
            ><font-awesome-icon :icon="['fa', 'envelope']" class="mr-4" />John
            Doe</a
          >
        </p>
        <a href="mailto:anh.ht.le@gmail.com">help@sparkadvisor.com</a>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
