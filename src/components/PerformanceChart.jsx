import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PerformanceChart = ({ chartData, isDarkMode }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();

    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: chartData.map((d) => d.subject),
          datasets: [{
            label: "Average Score",
            data: chartData.map((d) => d.averageScore),
            backgroundColor: isDarkMode
              ? "rgba(59,130,246,0.8)" 
              : "rgba(30,64,175,1)",  
            hoverBackgroundColor: isDarkMode
              ? "rgba(147,197,253,0.9)"
              : "rgba(59,130,246,1)"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: isDarkMode ? "#fff" : "#000"
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: isDarkMode ? "#fff" : "#000"
              }
            },
            x: {
              ticks: {
                color: isDarkMode ? "#fff" : "#000"
              }
            }
          }
        }
      });
    }
  }, [chartData, isDarkMode]);

  return (
    <div
      className={`ml-0 md:ml-10 rounded-2xl shadow-xl p-4 md:p-6 bg-white dark:bg-gray-800`}
      style={{ height: "400px" }} // Chart height responsive
    >
      <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Average Score by Subject
      </h2>
      <div className="h-full w-full">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PerformanceChart;
