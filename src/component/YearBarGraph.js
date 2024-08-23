import React from "react";
import { Bar } from "react-chartjs-2";
import faker from "faker";

const YearBarGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "aug",
    "sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(108, 44, 255, 1)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(155, 153, 160, 1)",
      },
    ],
  };

  return (
    <div style={{ width: "1350px", height: "200px", paddingLeft: "180px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default YearBarGraph;
