<template>
  <div id="Home">
    <h1 class="mb-10 text-4xl color-blue-spark">Good morning, Batman!</h1>

    <div class="mb-16">
      <OverviewSection />
    </div>

    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-2">
        <div class="mb-5">
          <RecentClientsSection :clients="clients" />
        </div>

        <div>
          <RecentProspectsSection :prospects="prospects" />
        </div>
      </div>

      <div class="col-span-3">
        <ChartSection :datasets="datasets" />
      </div>
    </div>
  </div>
</template>

<script>
import ChartSection from "./ChartSection";
import OverviewSection from "./OverviewSection";
import RecentClientsSection from "./RecentClientsSection";
import RecentProspectsSection from "./RecentProspectsSection";

export default {
  components: {
    ChartSection,
    OverviewSection,
    RecentClientsSection,
    RecentProspectsSection,
  },

  data() {
    return {
      clients: [
        {
          id: 1,
          first_name: "George",
          last_name: "Washington",
          action: "call",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Adams",
          action: "email",
        },
        {
          id: 3,
          first_name: "Thomas",
          last_name: "Jefferson",
          action: "email",
        },
        {
          id: 4,
          first_name: "James",
          last_name: "Madison",
          action: "call",
        },
        {
          id: 5,
          first_name: "James",
          last_name: "Monroe",
          action: "call",
        },
      ],
      datasets: {
        labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        data: [10, 7, 15, 7, 12, 8, 14],
      },
      prospects: [
        {
          id: 1,
          first_name: "Red",
          last_name: "Ranger",
          phone_number: "123-456-7890",
        },
        {
          id: 2,
          first_name: "Blue",
          last_name: "Ranger",
          phone_number: "123-456-7890",
        },
        {
          id: 3,
          first_name: "Black",
          last_name: "Ranger",
          phone_number: "123-456-7890",
        },
        {
          id: 4,
          first_name: "Yellow",
          last_name: "Ranger",
          phone_number: "123-456-7890",
        },
        {
          id: 5,
          first_name: "Pink",
          last_name: "Ranger",
          phone_number: "123-456-7890",
        },
      ],
    };
  },
};
</script>
