<template>
  <div id="AgentDashboardLayout" class="layout">
    <Navbar />

    <main class="container py-10 mx-auto">
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
main {
  min-height: 89vh;
}
</style>
