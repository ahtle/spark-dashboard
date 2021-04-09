<template>
  <div id="Home">
    <h1 class="mb-10 text-4xl color-blue-spark">Good morning, Batman!</h1>

    <div class="mb-16">
      <OverviewSection />
    </div>

    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-2">
        <RecentClientsSection :clients="clients" />
      </div>

      <div class="col-span-3">
        <ChartSection :chartdata="chartdata" />
      </div>

      <div>3</div>
    </div>
  </div>
</template>

<script>
import ChartSection from "./ChartSection";
import OverviewSection from "./OverviewSection";
import RecentClientsSection from "./RecentClientsSection";

export default {
  components: {
    ChartSection,
    OverviewSection,
    RecentClientsSection,
  },

  data() {
    return {
      clients: [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          action: "call",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Doe",
          action: "email",
        },
        {
          id: 3,
          first_name: "John",
          last_name: "Doe",
          action: "email",
        },
        {
          id: 4,
          first_name: "Jane",
          last_name: "Doe",
          action: "call",
        },
        {
          id: 5,
          first_name: "Jane",
          last_name: "Doe",
          action: "call",
        },
      ],
      chartdata: {
        labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: [10, 7, 15, 7, 12, 8, 14],
          },
        ],
      },
    };
  },
};
</script>
