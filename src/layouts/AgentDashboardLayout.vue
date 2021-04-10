<template>
  <div id="AgentDashboardLayout" class="layout">
    <Navbar />

    <main class="container px-2 py-5 mx-auto md:py-10 md:px-0">
      <slot />
    </main>

    <MainFooter />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "AgentDashboardLayout",
  components: { Navbar, MainFooter },
};
</script>

<style scoped>
</style>
