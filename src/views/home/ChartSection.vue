<template>
  <div class="overflow-hidden border rounded shadow">
    <h3 class="p-5 text-xl font-bold">Per Business Rules</h3>

    <!-- card body -->
    <div class="px-5 pb-3">
      <BarChart :chartdata="chartdata" />
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
import BarChart from "@/components/charts/BarChart";

export default {
  components: {
    BarChart,
  },
  props: {
    chartdata: Object,
  },
};
</script>
