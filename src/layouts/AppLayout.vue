<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AgentDashboardLayout";

export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
