<template>
  <div class="overflow-hidden border rounded shadow">
    <h3 class="p-5 text-xl font-bold">Recent Clients</h3>

    <!-- card body -->
    <div class="px-5 pb-3">
      <div
        v-for="(c, i) in clients"
        :key="c.id"
        class="grid grid-cols-2 gap-2 py-2 mb-1 text-lg"
        :class="i < clients.length - 1 ? 'border-b border-gray-100' : ''"
      >
        <span>{{ c.first_name }} {{ c.last_name }}</span>

        <span v-if="c.action === 'call'">
          <font-awesome-icon :icon="['fa', 'phone-alt']" class="mr-2" />
          Follow up call
        </span>
        <span v-if="c.action === 'email'">
          <font-awesome-icon :icon="['fa', 'envelope']" class="mr-2" />
          Email to get medical info
        </span>
      </div>
    </div>

    <!-- card footer -->
    <div
      class="flex justify-between px-5 py-2 text-white border-t border-gray-100 bg-blue-spark"
    >
      <p>
        Last 7 days
        <font-awesome-icon :icon="['fa', 'caret-down']" class="ml-2" />
      </p>
      <p>View All <span class="ml-2">></span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clients: Array,
  },
};
</script>
