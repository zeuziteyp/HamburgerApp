// Basic Heatmap - Single Series
function generateData(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

export const singleSeriesHeatmap = {
  chart: {
    height: 380,
    type: "heatmap",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#3e60d5"],
  series: [
    {
      name: "Metric 1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric  6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 9",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  xaxis: {
    type: "category",
  },
};

// Heatmap - Multiple Series
export const multipleSeriesHeatmap = {
  chart: {
    height: 380,
    type: "heatmap",
  },
  dataLabels: {
    enabled: false,
  },
  colors: [
    "#F3B415",
    "#F27036",
    "#663F59",
    "#6A6E94",
    "#4E88B4",
    "#00A7C6",
    "#18D8D8",
    "#A9D794",
    "#46AF78",
  ],
  series: [
    {
      name: "Metric 1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric 9",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  xaxis: {
    type: "category",
  },
};

// Heatmap - Color Range
export const colorRangeHeatmap = {
  chart: {
    height: 380,
    type: "heatmap",
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,

      colorScale: {
        ranges: [
          {
            from: -30,
            to: 5,
            name: "Low",
            color: "#fa6767",
          },
          {
            from: 6,
            to: 20,
            name: "Medium",
            color: "#f9bc0d",
          },
          {
            from: 21,
            to: 45,
            name: "High",
            color: "#44badc",
          },
          {
            from: 46,
            to: 55,
            name: "Extreme",
            color: "#42d29d",
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Jan",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Feb",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Mar",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Apr",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "May",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Jun",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Jul",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Aug",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Sep",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
  ],
};

// Heatmap - Range without Shades
export const roundedHeatmap = {
  chart: {
    height: 380,
    type: "heatmap",
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: "#47ad77",
          },
          {
            from: 51,
            to: 100,
            color: "#ffbc00",
          },
        ],
      },
    },
  },
  colors: ["#47ad77", "#ffbc00"],
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#fff"],
    },
  },
  series: [
    {
      name: "Metric1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],

  xaxis: {
    type: "category",
  },
  grid: {
    borderColor: "#f1f3fa",
  },
};
