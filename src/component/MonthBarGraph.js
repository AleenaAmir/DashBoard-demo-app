import React from "react";
import { Bar } from "react-chartjs-2";
// import {Chart as chartjs}from chartjs
import {
  Chart as chartjs,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function MonthBarChart() {
  const data = {
    labels: ["sat", "sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        data: [10, 30, 20, 10, 30, 20, 10, 5, 10],
        backgroundColor: [
          "rgba(108, 44, 255, 1)",
          "rgba(108, 44, 255, 1)",
          "rgba(155, 153, 160, 1)",
          "rgba(155, 153, 160, 1)",
          "rgba(155, 153, 160, 1)",
          "rgba(108, 44, 255, 1)",
          "rgba(155, 153, 160, 1)",
          "rgba(108, 44, 255, 1)",
          "rgba(108, 44, 255, 1)",
        ],
        borderColor: "linear-gradient(90deg, #6c2cff 1.04%, #7d51de 100%)",
        borderRadius: 14.1323,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            labelString: "Bins",
          },
          barPercentage: 0.1, // Adjust the bar width (0.6 means 60% of the available space)
          categoryPercentage: 0.7, // Adjust the spacing between bars (0.7 means 70% of the available space)
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            drawTicks: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Frequency",
          },
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10,
          },
          gridLines: {
            drawTicks: false,
            drawBorder: false,
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: "770px", height: "200px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default MonthBarChart;
