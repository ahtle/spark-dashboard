<template>
  <div class="overflow-hidden border rounded shadow">
    <h3 class="p-3 text-lg font-bold md:p-5 md:text-xl">Recent Clients</h3>

    <!-- card body -->
    <div class="px-4 pb-3 md:px-8">
      <div
        v-for="(c, i) in clients"
        :key="c.id"
        class="flex grid items-center grid-cols-2 gap-2 py-2 mb-1 text-md md:text-lg"
        :class="i < clients.length - 1 ? 'border-b border-gray-100' : ''"
      >
        <p>{{ c.first_name }} {{ c.last_name }}</p>

        <p v-if="c.action === 'call'" class="flex items-center">
          <font-awesome-icon :icon="['fa', 'phone-alt']" class="mr-4" />
          <span>Follow up call</span>
        </p>
        <p v-if="c.action === 'email'" class="flex items-center">
          <font-awesome-icon :icon="['fa', 'envelope']" class="mr-4" />
          <span>Email to get medical info</span>
        </p>
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
