// Basic Radar Chart
export const basicRadarChart = {
  chart: {
    height: 350,
    type: "radar",
  },
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  colors: ["#3e60d5"],
  labels: ["January", "February", "March", "April", "May", "June"],
};

// Radar with Polygon-fill
export const fillPolygonRadarChart = {
  chart: {
    height: 350,
    type: "radar",
  },
  series: [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  plotOptions: {
    radar: {
      size: 140,
    },
  },
  colors: ["#FF4560"],
  markers: {
    size: 4,
    colors: ["#fff"],
    strokeColors: ["#FF4560"],
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val.toString();
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val, i) {
        if (i % 2 === 0) {
          return val.toString();
        } else {
          return "";
        }
      },
    },
  },
};

// Radar – Multiple Series
export const multipleSeriesRadarChart = {
  chart: {
    height: 350,
    type: "radar",
  },
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  stroke: {
    width: 0,
  },
  fill: {
    opacity: 0.4,
  },
  markers: {
    size: 0,
  },
  legend: {
    offsetY: -10,
  },
  colors: ["#3e60d5", "#02a8b5", "#fd7e14"],
  labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
};
