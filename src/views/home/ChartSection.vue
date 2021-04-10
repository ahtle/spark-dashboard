<template>
  <div class="w-full overflow-hidden border rounded shadow">
    <h3 class="p-2 text-xl font-bold p2 md:p-5">Per Business Rules</h3>

    <!-- card body -->
    <div class="px-2 pb-3 md:px-5">
      <div class="flex justify-between px-2 mb-10 md:px-5">
        <span class="pb-2 font-bold border-b-4 border-blue-600 text-blue-spark">
          Automated Outreaches
        </span>

        <div>
          <button
            @click="chartType = 'bar'"
            class="w-16 px-4 py-1 transition bg-gray-200 md:w-20 hover:bg-gray-300"
            :class="{ 'bg-blue-spark text-white': chartType === 'bar' }"
          >
            BAR
          </button>
          <button
            @click="chartType = 'line'"
            class="w-16 px-4 py-1 transition bg-gray-200 md:w-20 hover:bg-gray-300"
            :class="{
              'bg-blue-spark hover:bg-blue-700 text-white':
                chartType === 'line',
            }"
          >
            LINE
          </button>
        </div>
      </div>

      <BarChart
        v-if="chartType === 'bar'"
        :chartdata="computedChartData"
        :width="`100%`"
      />
      <LineChart
        v-if="chartType === 'line'"
        :chartdata="computedChartData"
        :width="`100%`"
      />
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
import LineChart from "@/components/charts/LineChart";

export default {
  components: {
    BarChart,
    LineChart,
  },
  props: {
    datasets: Object,
  },

  data() {
    return {
      chartType: "line",
    };
  },

  computed: {
    computedChartData() {
      if (this.chartType === "bar") {
        return {
          labels: this.datasets.labels,
          datasets: [
            {
              data: this.datasets.data,
              backgroundColor: "#f87979",
            },
          ],
        };
      } else if (this.chartType === "line") {
        return {
          labels: this.datasets.labels,
          datasets: [
            {
              data: this.datasets.data,
              backgroundColor: "#f87979",
              borderColor: "#f87979",
              fill: false,
            },
          ],
        };
      }
      return {};
    },
  },
};
</script>
