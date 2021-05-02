import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
// import "./LineGraph.css";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const casesTypeColors = {
  cases: {
    hex: "#f91867",
    rgba: "rgb(249, 24, 103, 0.5)",
  },
  recovered: {
    hex: "#7dd71d",
    rgba: "rgb(125, 215, 29, 0.5)",
  },
  deaths: {
    hex: "#CC1034",
    rgba: "rgb(204, 16, 52, 0.8)",
  },
};

function LineGraph() {
  const [casesData, setCasesData] = useState({});

  //function for converting API data into format compatible for LineGraph
  const getChartData = (data, caseType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data["cases"]) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data["cases"][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  useEffect(() => {
    let url = "";

    url = "https://disease.sh/v3/covid-19/historical/India?lastdays=120";

    const fetchData = async () => {
      let chartData;
      try {
        await fetch(url) //async await...Call to get data from external API
          .then((response) => response.json())
          .then((data) => {
            chartData = getChartData(data.timeline, "cases");
            setCasesData(chartData);
          });
      } catch (e) {
        console.log("404 error", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="graph">
      <h3>Cases in India</h3>
      {casesData?.length > 0 && (
        <Line
          className="graph__linegraph"
          options={options}
          // width = {200}
          // height = {150}
          data={{
            datasets: [
              {
                data: casesData,
                backgroundColor: casesTypeColors["cases"].rgba,
                borderColor: casesTypeColors["cases"].hex,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
