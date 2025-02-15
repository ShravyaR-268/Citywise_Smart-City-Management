// Traffic Chart Data
// document.addEventListener('DOMContentLoaded', () => {
//     const ctx = document.getElementById('traffic-chart').getContext('2d');
//     const trafficChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
//         datasets: [
//           {
//             label: 'Traffic Intensity',
//             data: [10, 40, 25, 50, 70, 30], // Simulated traffic data
//             borderColor: 'rgba(255, 99, 132, 1)',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderWidth: 2,
//             fill: true,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             callbacks: {
//               label: (context) => `${context.raw}% congestion`,
//             },
//           },
//         },
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Time of Day',
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Congestion (%)',
//             },
//             min: 0,
//             max: 100,
//           },
//         },
//       },
//     });
//   });
  

// Initialize Chart.js for Traffic Insights
document.addEventListener("DOMContentLoaded", () => {
    // Traffic Volume Chart
    const trafficVolumeCtx = document.getElementById("trafficVolumeChart").getContext("2d");
    new Chart(trafficVolumeCtx, {
      type: "line",
      data: {
        labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
        datasets: [
          {
            label: "Traffic Volume",
            data: [20, 50, 70, 40, 80, 30],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  
    // Congestion Chart
    const congestionCtx = document.getElementById("congestionChart").getContext("2d");
    new Chart(congestionCtx, {
      type: "pie",
      data: {
        labels: ["No Traffic", "Light Traffic", "High Congestion"],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: ["#17a2b8", "#ffc107", "#dc3545"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  });


  
  