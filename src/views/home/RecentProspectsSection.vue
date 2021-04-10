<template>
  <div class="overflow-hidden border rounded shadow">
    <h3 class="p-5 text-xl font-bold">Recent Prospects</h3>

    <!-- card body -->
    <div class="px-8 pb-3">
      <div
        v-for="(p, i) in prospects"
        :key="p.id"
        class="grid grid-cols-2 gap-2 py-2 mb-1 text-lg"
        :class="i < prospects.length - 1 ? 'border-b border-gray-100' : ''"
      >
        <span>{{ p.first_name }} {{ p.last_name }}</span>

        <span class="text-right">{{ p.phone_number }} </span>
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
    prospects: Array,
  },
};
</script>
