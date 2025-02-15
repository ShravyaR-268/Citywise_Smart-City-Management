// Initialize Chart.js for Waste Management Insights
document.addEventListener("DOMContentLoaded", () => {
    // Waste Segregation Chart
    const wasteSegregationCtx = document.getElementById("wasteSegregationChart").getContext("2d");
    new Chart(wasteSegregationCtx, {
      type: "doughnut",
      data: {
        labels: ["Biodegradable", "Non-Biodegradable"],
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ["#28a745", "#ffc107"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  
    // Collection Trends Chart
    const collectionTrendsCtx = document.getElementById("collectionTrendsChart").getContext("2d");
    new Chart(collectionTrendsCtx, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "Biodegradable (kg)",
            data: [15, 20, 25, 18, 22, 30, 35],
            borderColor: "#28a745",
            backgroundColor: "rgba(40, 167, 69, 0.2)",
            fill: true,
          },
          {
            label: "Non-Biodegradable (kg)",
            data: [10, 12, 8, 15, 10, 18, 25],
            borderColor: "#ffc107",
            backgroundColor: "rgba(255, 193, 7, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  });
  