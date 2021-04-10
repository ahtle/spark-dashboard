<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  props: {
    chartdata: Object,
  },

  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    };
  },

  methods: {
    renderBarChart: function () {
      this.renderChart(this.chartdata, this.options);
    },
  },

  mounted() {
    this.renderBarChart();
  },
};
</script>