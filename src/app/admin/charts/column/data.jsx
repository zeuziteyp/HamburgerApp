// Basic Column Chart
export const basicColumnChart = {
  chart: {
    height: 396,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      // endingShape: 'rounded',
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  colors: ["#3e60d5", "#47ad77", "#fa5c7c"],
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  legend: {
    offsetY: 7,
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
    padding: {
      bottom: 5,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

// Column Chart with Datalabels
export const datalabelsColumnChart = {
  chart: {
    height: 380,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -25,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  colors: ["#3e60d5"],
  legend: {
    show: true,
    horizontalAlign: "center",
    offsetX: 0,
    offsetY: -5,
  },
  series: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    labels: {
      offsetY: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
      offsetY: -10,
    },
  },
  fill: {
    gradient: {
      // enabled: false,
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  title: {
    text: "Monthly Inflation in Argentina, 2002",
    floating: true,
    offsetY: 360,
    align: "center",
    style: {
      color: "#444",
    },
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
  },
};

// Stacked Column Chart
export const stackedColumnChart = {
  chart: {
    height: 380,
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  series: [
    {
      name: "Product A",
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "Product B",
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "Product C",
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ],
  xaxis: {
    categories: [
      "2011 Q1",
      "2011 Q2",
      "2011 Q3",
      "2011 Q4",
      "2012 Q1",
      "2012 Q2",
      "2012 Q3",
      "2012 Q4",
    ],
  },
  colors: ["#39afd1", "#ffbc00", "#e3eaef"],
  fill: {
    opacity: 1,
  },
  legend: {
    offsetY: 7,
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
    padding: {
      bottom: 5,
    },
  },
};

// 100% Stacked Column Chart
export const fullStackedColumnChart = {
  chart: {
    height: 380,
    type: "bar",
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  series: [
    {
      name: "Product A",
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "Product B",
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "Product C",
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ],
  xaxis: {
    categories: [
      "2011 Q1",
      "2011 Q2",
      "2011 Q3",
      "2011 Q4",
      "2012 Q1",
      "2012 Q2",
      "2012 Q3",
      "2012 Q4",
    ],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    offsetY: 7,
  },
  colors: ["#39afd1", "#47ad77", "#e3eaef"],
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
    padding: {
      bottom: 5,
    },
  },
};

// Column with Markers
export const markersColumnChart = {
  series: [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Expected",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2012",
          y: 4432,
          goals: [
            {
              name: "Expected",
              value: 5400,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2013",
          y: 5423,
          goals: [
            {
              name: "Expected",
              value: 5200,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2014",
          y: 6653,
          goals: [
            {
              name: "Expected",
              value: 6500,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2015",
          y: 8133,
          goals: [
            {
              name: "Expected",
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: "round",
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2016",
          y: 7132,
          goals: [
            {
              name: "Expected",
              value: 7500,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2017",
          y: 7332,
          goals: [
            {
              name: "Expected",
              value: 8700,
              strokeHeight: 5,
              strokeColor: "#ffbc00",
            },
          ],
        },
        {
          x: "2018",
          y: 6553,
          goals: [
            {
              name: "Expected",
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: "#ffbc00",
            },
          ],
        },
      ],
    },
  ],
  chart: {
    height: 380,
    type: "bar",
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#3e60d5", "#fa5c7c"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ["Actual", "Expected"],
    markers: {
      fillColors: ["#3e60d5", "#fa5c7c"],
    },
  },
};

// Column with Group Label
export const groupLabelColumnChart = {
  series: [
    {
      name: "Sales",
      data: [
        {
          x: "2020/01/01",
          y: 400,
        },
        {
          x: "2020/04/01",
          y: 430,
        },
        {
          x: "2020/07/01",
          y: 448,
        },
        {
          x: "2020/10/01",
          y: 470,
        },
        {
          x: "2021/01/01",
          y: 540,
        },
        {
          x: "2021/04/01",
          y: 580,
        },
        {
          x: "2021/07/01",
          y: 690,
        },
        {
          x: "2021/10/01",
          y: 690,
        },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 380,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45%",
    },
  },
  colors: ["#39afd1", "#47ad77"],
  xaxis: {
    type: "category",
    labels: {
      // formatter: function (val) {
      //   return "Q" + dayjs(val).quarter()
      // }
    },
    group: {
      style: { fontSize: "10px", fontWeight: 700 },
      groups: [
        {
          title: "2020",
          cols: 4,
        },
        {
          title: "2021",
          cols: 4,
        },
      ],
    },
  },
  tooltip: {
    x: {
      // formatter: function (val) {
      //   return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
      // }
    },
  },
};
// Column Chart with rotated labels & Annotations
export const labelsColumnChart = {
  annotations: {
    points: [
      {
        x: "Bananas",
        seriesIndex: 0,
        label: {
          borderColor: "#3e60d5",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#3e60d5",
          },
          text: "Bananas are good",
        },
      },
    ],
  },
  chart: {
    height: 380,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
      // endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  colors: ["#fa5c7c"],
  series: [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
    },
  ],
  grid: {
    borderColor: "#f1f3fa",
    padding: {
      top: 0,
      right: -2,
      bottom: -35,
      left: 10,
    },
  },
  xaxis: {
    labels: {
      rotate: -45,
    },
    categories: [
      "Apples",
      "Oranges",
      "Strawberries",
      "Pineapples",
      "Mangoes",
      "Bananas",
      "Blackberries",
      "Pears",
      "Watermelons",
      "Cherries",
      "Pomegranates",
      "Tangerines",
      "Papayas",
    ],
  },
  yaxis: {
    title: {
      text: "Servings",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
};

// Column Chart with negative values
export const negativeValuesColumnChart = {
  chart: {
    height: 380,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: -46,
            color: "#fa5c7c",
          },
          {
            from: -45,
            to: 0,
            color: "#ffbc00",
          },
        ],
      },
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#3e60d5"],
  series: [
    {
      name: "Cash Flow",
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34,
        3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4,
        -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ],
  yaxis: {
    title: {
      text: "Growth",
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "%";
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2011-01-01",
      "2011-02-01",
      "2011-03-01",
      "2011-04-01",
      "2011-05-01",
      "2011-06-01",
      "2011-07-01",
      "2011-08-01",
      "2011-09-01",
      "2011-10-01",
      "2011-11-01",
      "2011-12-01",
      "2012-01-01",
      "2012-02-01",
      "2012-03-01",
      "2012-04-01",
      "2012-05-01",
      "2012-06-01",
      "2012-07-01",
      "2012-08-01",
      "2012-09-01",
      "2012-10-01",
      "2012-11-01",
      "2012-12-01",
      "2013-01-01",
      "2013-02-01",
      "2013-03-01",
      "2013-04-01",
      "2013-05-01",
      "2013-06-01",
      "2013-07-01",
      "2013-08-01",
      "2013-09-01",
    ],
    labels: {
      rotate: -90,
    },
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
  },
};

// Distributed Column Chart
export const distributedColumnChart = {
  chart: {
    height: 380,
    type: "bar",
    toolbar: {
      show: false,
    },
    events: {
      click: function (chart, w, e) {
        console.log(chart, w, e);
      },
    },
  },
  colors: [
    "#3e60d5",
    "#6c757d",
    "#47ad77",
    "#fa5c7c",
    "#ffbc00",
    "#39afd1",
    "#e3eaef",
    "#313a46",
  ],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
  xaxis: {
    categories: [
      "John",
      "Joe",
      "Jake",
      "Amber",
      "Peter",
      "Mary",
      "David",
      "Lily",
    ],
    labels: {
      style: {
        colors: [
          "#3e60d5",
          "#6c757d",
          "#47ad77",
          "#fa5c7c",
          "#ffbc00",
          "#39afd1",
          "#e3eaef",
          "#313a46",
        ],
        fontSize: "14px",
      },
    },
  },
  legend: {
    offsetY: 7,
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f3fa",
  },
};

// Range Column Chart
export const rangeColumnChart = {
  chart: {
    height: 380,
    type: "rangeBar",
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  legend: {
    offsetY: 7,
  },
  colors: ["#47ad77", "#39afd1"],
  series: [
    {
      name: "Product A",
      data: [
        {
          x: "Team A",
          y: [1, 5],
        },
        {
          x: "Team B",
          y: [4, 6],
        },
        {
          x: "Team C",
          y: [5, 8],
        },
        {
          x: "Team D",
          y: [3, 11],
        },
      ],
    },
    {
      name: "Product B",
      data: [
        {
          x: "Team A",
          y: [2, 6],
        },
        {
          x: "Team B",
          y: [1, 3],
        },
        {
          x: "Team C",
          y: [7, 8],
        },
        {
          x: "Team D",
          y: [5, 9],
        },
      ],
    },
  ],
};
