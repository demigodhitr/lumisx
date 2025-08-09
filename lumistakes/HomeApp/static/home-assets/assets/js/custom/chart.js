/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/assets/js/custom/chart.js ***!
  \***************************************/
function cardChart(name, data, color, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var options = {
      series: [
        {
          name: name,
          data: data
        }
      ],
      chart: {
        height: 100,
        type: 'area',
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {show: false},
        zoom: {
          enabled: false
        },
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [color],
      stroke: {
        width: 1,
        curve: 'straight'
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 80, 100]
        }
      },
      grid: {
        show:false,
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: categories,
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      },
      yaxis: {
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      }
    };  
    var chart = new ApexCharts(document.querySelector(htmlEl), options);
    chart.render();
  }
}

cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-3"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-4"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-5"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-6"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-7--market-v2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-8--market-v2"
);

// Standard Card Top Assets Chart
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-3"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-4"
);

cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-5"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-6"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-7"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card--type-7-8"
);

// Standard Card Type 8 Chart
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__item-line-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__item-line-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#item-collapse__chart-line-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#item-collapse__chart-line-2"
);

// Landing Page v1 Chart
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-3"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-4"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-5"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-6"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-7"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#grid-grap-item-graph__graph-8"
);

// Landing Page v2 Chart
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#crypto-graph-item-graph__graph-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#crypto-graph-item-graph__graph-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#crypto-graph-item-graph__graph-3"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#crypto-graph-item-graph__graph-4"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#crypto-graph-item-graph__graph-5"
);

// Landing Page v3 Chart
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-1"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-2"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-3"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-4"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-5"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-6"
);
cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#assets-table__graph-7"
);

function walletChart(data1, data2, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var options = {
      series: [
        {
          name: "Wallet Chart 1",
          data: data1
        },
        {
          name: "Wallet Chart 2",
          data: data2
        }
      ],
      chart: {
        width: "100%",
        height: 100,
        type: 'area',
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {show: false},
        zoom: {
          enabled: false
        },
        stacked: false
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#30E0A1', '#BD47FB'],
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      grid: {
        show:false,
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: categories,
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      },
      yaxis: {
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      }
    };
    
    var chart = new ApexCharts(document.querySelector(htmlEl), options);
    chart.render();
  }
}

walletChart(
  [ 0, 5, 15, 12, 10, 12, 8, 10, 0 ],
  [ 0, 8, 12, 15, 20, 15, 12, 10, 0 ],
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  "#standard-card__content-chart-7"
);

walletChart(
  [ 0, 5, 15, 12, 10, 12, 8, 10, 0 ],
  [ 0, 8, 12, 15, 20, 15, 12, 10, 0 ],
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  "#standard-card__content-chart-8"
);

walletChart(
  [ 0, 5, 15, 12, 10, 12, 8, 10, 0 ],
  [ 0, 8, 12, 15, 20, 15, 12, 10, 0 ],
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  "#standard-card__content-chart-9"
);

function balanceRadial(series, color, label, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var balanceRadialBarOpt = {
        series: [series],
        chart: {
        height: '100%',
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '49%',
          },
          dataLabels: {
            name: {
              offsetY: 5,
              fontSize: '14px',
              fontWeight: 500,
              color: '#fff'
            },
            value: {show: false}
          },
          track: {
            background: '#34384C'
          }
        },
      },
      fill: {
        type: 'solid',
        colors: [color]
      },
      labels: [label],
      stroke: {
        lineCap: 'round'
      }
    };
    
    var balanceRadialBar = new ApexCharts(document.querySelector(htmlEl), balanceRadialBarOpt);
    balanceRadialBar.render();
  }
}

function largeBalanceRadial(series, color, label, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var largeBalanceRadialBarOpt = {
      series: [series],
      chart: {
        width: 170,
        height: 170,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%',
          },
          dataLabels: {
            name: {
              offsetY: 5,
              fontSize: '14px',
              fontWeight: 500,
              color: '#fff'
            },
            value: {show: false}
          },
          track: {
            background: '#141518'
          }
        },
      },
      fill: {
        type: 'solid',
        colors: [color]
      },
      labels: [label],
      stroke: {
        lineCap: 'round'
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            width: '90px',
            height: '150px'
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '49%'
              },
              track: {
                background: '#34384C'
              }
            }
          }
        }
      }]
    };
    
    var largeBalanceRadialBar = new ApexCharts(document.querySelector(htmlEl), largeBalanceRadialBarOpt);
    largeBalanceRadialBar.render();
  }
}

balanceRadial(50, '#C963FF', '-0.32%', "#advance-card__card-radial-1");
balanceRadial(70, '#30E0A1', '+0.25%', "#advance-card__card-radial-2");
largeBalanceRadial(50, '#C963FF', '-0.32%', "#advance-card__card-radial-3");
largeBalanceRadial(70, '#30E0A1', '+0.25%', "#advance-card__card-radial-4");

function balanceLine(name, data, width, height, color, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var options = {
      series: [
        {
          name: name,
          data: data
        }
      ],
      chart: {
        width: width,
        height: height,
        type: 'area',
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {show: false},
        zoom: {
          enabled: false
        },
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [color],
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      fill: {
        type: "gradient",
        colors: [color],
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 80, 100]
        }
      },
      grid: {
        show:false,
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: categories,
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      },
      yaxis: {
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            width: '120px',
            height: 65,
          }
        }
      }]
    };
    
    var chart = new ApexCharts(document.querySelector(htmlEl), options);
    chart.render();
  }
}

balanceLine(
  'exchange-balance-1', 
  [10, 5, 0, 5, 10, 12, 10, 5], 
  '120px',
  65,
  '#E323FF', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-1"
);
balanceLine(
  'exchange-balance-2', 
  [10, 12, 10, 12, 15, 12, 18, 15], 
  '120px',
  65,
  '#8AFF6C', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-2"
);
balanceLine(
  'exchange-balance-3',
  [10, 5, 0, 5, 10, 12, 10, 5], 
  '190px',
  85,
  '#E323FF', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-3"
);
balanceLine(
  'exchange-balance-4', 
  [10, 12, 10, 12, 15, 12, 18, 15], 
  '190px',
  85,
  '#8AFF6C', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-4"
);
balanceLine(
  'exchange-balance-5',
  [10, 5, 0, 5, 10, 12, 10, 5], 
  '190px',
  85,
  '#E323FF', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-5"
);
balanceLine(
  'exchange-balance-6', 
  [10, 12, 10, 12, 15, 12, 18, 15], 
  '190px',
  85,
  '#8AFF6C', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-6"
);
balanceLine(
  'exchange-balance-7', 
  [10, 12, 10, 12, 15, 12, 18, 15], 
  '120px',
  65,
  '#FA2256', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-7"
);
balanceLine(
  'exchange-balance-8', 
  [10, 12, 10, 12, 15, 12, 18, 15], 
  '120px',
  65,
  '#11CABE', 
  ['1', '2', '3', '4', '5', '6', '7', '8'], 
  "#advance-card__card-line-8"
);

// Complete Card - Wallet Donut Chart
function walletDonutChart(series, colors, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var options = {
      series: series,
      colors: colors,
      chart: {
        type: 'donut',
        width: '163px',
        height: '163px',
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {show: false},
        zoom: {
          enabled: false
        },
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      legend: {show: false},
      tooltip: {
        enabled: false
      },
      stroke: {
        show: true,
        colors: '#1E1F25',
        width: 3
      }
    };
    
    var chart = new ApexCharts(document.querySelector(htmlEl), options);
    chart.render();
  }
}

walletDonutChart(
  [45, 23, 32], 
  ['#F7931A', '#30E0A1', '#BD47FB'], 
  "#complete-card__wallet-data__donut-chart-1"
);

walletDonutChart(
  [45, 23, 32], 
  ['#F7931A', '#30E0A1', '#BD47FB'], 
  "#complete-card__wallet-data__donut-chart-2"
);

/// Complete Card - Overall Growth Line Area Chart /// 
function overallAreaChart(dataLine1, dataLine2, dataLine3, dataBar1, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var overallAreaChartOpt = {
      series: [{
        name: 'BTC',
        type: 'line',
        data: dataLine1
      }, {
        name: 'ETH',
        type: 'line',
        data: dataLine2
      }, {
        name: 'USDT',
        type: 'line',
        data: dataLine3
      }, {
        name: 'Bar',
        type: 'column',
        data: dataBar1
      }],
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        toolbar: {show: false},
        zoom: {enabled: false}
      },
      legend: {show: false},
      stroke: {
        width: [4, 4, 4, 0],
        curve: 'smooth'
      },
      colors: ['#F7931A', '#BD47FB', '#30E0A1', '#252D55'],
      plotOptions: {
        bar: {
          columnWidth: '8px',
        }
      },
      fill: {
        gradient: {
          inverseColors: false,
          shade: 'dark',
          type: "vertical",
          opacityFrom: 0.25,
          opacityTo: 0,
          stops: [0, 80]
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "category",
        categories: categories,
        labels: {
          style: {
            colors: '#5D6588',
            cssClass: 'fb-sm'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 5,
        forceNiceScale: true,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#5D6588',
            cssClass: 'fb-sm'
          }, 
          formatter: function(val, index) {
            val += '%'
            return val
          }
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };
  
    var overallAreaChartRender = new ApexCharts(document.querySelector(htmlEl), overallAreaChartOpt);
    overallAreaChartRender.render();
  }
};

overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-1"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-2"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-3"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-4"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-5"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-6"
);
overallAreaChart(
  [0, 0.5, 1.2, 1, 1.9, 2, 2, 1, 0.8, 1.8, 2, 2.5, 1, 0.5, 0.2, 1],
  [1.8, 1.7, 1, 1.5, 1.2, 2, 2.5, 2.8, 3, 2.8, 2, 1.2, 1.5, 3, 3.5, 2.5],
  [2.5, 1.5, 1.5, 2, 1.8, 1.9, 2.5, 3, 2.5, 2, 2.2, 3, 3.8, 3.5, 2.6, 3],
  [0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2, 0.5, 0.3, 0.8, 0.5, 0.2],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07'],
  "#complete-card__chart-area-7"
);

/// Complete Card - Overall Growth Column Chart /// 
function overallColumnChart(dataColumn1, dataColumn2, dataColumn3, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var overallColumnChartOpt = {
      series: [{
        name: 'BTC',
        data: dataColumn1
      }, {
        name: 'ETH',
        data: dataColumn2
      }, {
        name: 'USDT',
        data: dataColumn3
      }],
        chart: {
        type: 'bar',
        height: 350,
        toolbar: {show: false},
        zoom: {enabled: false}
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded'
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ['#F7931A', '#BD47FB', '#30E0A1'],
      xaxis: {
        type: "category",
        categories: categories,
        labels: {
          style: {
            colors: '#5D6588',
            cssClass: 'fb-sm'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 5,
        forceNiceScale: true,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#5D6588',
            cssClass: 'fb-sm'
          }, 
          formatter: function(val, index) {
            val += '%'
            return val
          }
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark'
      }
    };
    
    var overallColumnChartRender = new ApexCharts(document.querySelector(htmlEl), overallColumnChartOpt);
    overallColumnChartRender.render();
  }
};

overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-1"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-2"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-3"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-4"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-5"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-6"
);
overallColumnChart(
  [3.5, 1.8, 2.8, 2.5, 1.2, 1.4, 2, 3.9, 2.5, 4.5],
  [1.2, 2.3, 3.4, 1.5, 2.3, 0.5, 1.3, 1.9, 0.5, 1.5],
  [2.4, 1, 1.9, 3, 2.5, 0.9, 2.9, 2.9, 1.8, 3.5],
  ['04', '05', '06', '07', '08', '09', '10', '11', '12', '01'],
  "#complete-card__chart-column-7"
);

/// Complete Card - Overall Growth Candlestick Chart /// 
// function candlestickChart(data, htmlEl) {
//   if ($(htmlEl)[0]){  // check if this page have this class
//     var candlestickChartOpt = {
//       series: [{
//         data: data
//       }],
//         chart: {
//         height: 350,
//         type: 'candlestick',
//         toolbar: {show: false}
//       },
//       plotOptions: {
//         candlestick: {
//           colors: {
//             upward: '#11CABE',
//             downward: '#FA2256'
//           }
//         }
//       },
//       tooltip: {
//         theme: 'dark'
//       },
//       xaxis: {
//         type: 'datetime',
//         labels: {
//           style: {
//             colors: '#5D6588',
//             cssClass: 'fb-sm'
//           }
//         }
//       },
//       yaxis: {
//         show: false
//       },
//       legend: {show: false}
//     };
    
//     var candlestickChartRender = new ApexCharts(document.querySelector(htmlEl), candlestickChartOpt);
//     candlestickChartRender.render();
//   }
// };

// candlestickChart(
//   [
//     {
//       x: new Date(1538778600000),
//       y: [6629.81, 6650.5, 6623.04, 6633.33]
//     },
//     {
//       x: new Date(1538780400000),
//       y: [6632.01, 6643.59, 6620, 6630.11]
//     },
//     {
//       x: new Date(1538782200000),
//       y: [6630.71, 6648.95, 6623.34, 6635.65]
//     },
//     {
//       x: new Date(1538784000000),
//       y: [6635.65, 6651, 6629.67, 6638.24]
//     },
//     {
//       x: new Date(1538785800000),
//       y: [6638.24, 6640, 6620, 6624.47]
//     },
//     {
//       x: new Date(1538787600000),
//       y: [6624.53, 6636.03, 6621.68, 6624.31]
//     },
//     {
//       x: new Date(1538789400000),
//       y: [6624.61, 6632.2, 6617, 6626.02]
//     },
//     {
//       x: new Date(1538791200000),
//       y: [6627, 6627.62, 6584.22, 6603.02]
//     },
//     {
//       x: new Date(1538793000000),
//       y: [6605, 6608.03, 6598.95, 6604.01]
//     },
//     {
//       x: new Date(1538794800000),
//       y: [6604.5, 6614.4, 6602.26, 6608.02]
//     },
//     {
//       x: new Date(1538796600000),
//       y: [6608.02, 6610.68, 6601.99, 6608.91]
//     },
//     {
//       x: new Date(1538798400000),
//       y: [6608.91, 6618.99, 6608.01, 6612]
//     },
//     {
//       x: new Date(1538800200000),
//       y: [6612, 6615.13, 6605.09, 6612]
//     },
//     {
//       x: new Date(1538802000000),
//       y: [6612, 6624.12, 6608.43, 6622.95]
//     },
//     {
//       x: new Date(1538803800000),
//       y: [6623.91, 6623.91, 6615, 6615.67]
//     },
//     {
//       x: new Date(1538805600000),
//       y: [6618.69, 6618.74, 6610, 6610.4]
//     },
//     {
//       x: new Date(1538807400000),
//       y: [6611, 6622.78, 6610.4, 6614.9]
//     },
//     {
//       x: new Date(1538809200000),
//       y: [6614.9, 6626.2, 6613.33, 6623.45]
//     },
//     {
//       x: new Date(1538811000000),
//       y: [6623.48, 6627, 6618.38, 6620.35]
//     },
//     {
//       x: new Date(1538812800000),
//       y: [6619.43, 6620.35, 6610.05, 6615.53]
//     },
//     {
//       x: new Date(1538814600000),
//       y: [6615.53, 6617.93, 6610, 6615.19]
//     },
//     {
//       x: new Date(1538816400000),
//       y: [6615.19, 6621.6, 6608.2, 6620]
//     },
//     {
//       x: new Date(1538818200000),
//       y: [6619.54, 6625.17, 6614.15, 6620]
//     },
//     {
//       x: new Date(1538820000000),
//       y: [6620.33, 6634.15, 6617.24, 6624.61]
//     },
//     {
//       x: new Date(1538821800000),
//       y: [6625.95, 6626, 6611.66, 6617.58]
//     },
//     {
//       x: new Date(1538823600000),
//       y: [6619, 6625.97, 6595.27, 6598.86]
//     },
//     {
//       x: new Date(1538825400000),
//       y: [6598.86, 6598.88, 6570, 6587.16]
//     },
//     {
//       x: new Date(1538827200000),
//       y: [6588.86, 6600, 6580, 6593.4]
//     },
//     {
//       x: new Date(1538829000000),
//       y: [6593.99, 6598.89, 6585, 6587.81]
//     },
//     {
//       x: new Date(1538830800000),
//       y: [6587.81, 6592.73, 6567.14, 6578]
//     },
//     {
//       x: new Date(1538832600000),
//       y: [6578.35, 6581.72, 6567.39, 6579]
//     },
//     {
//       x: new Date(1538834400000),
//       y: [6579.38, 6580.92, 6566.77, 6575.96]
//     },
//     {
//       x: new Date(1538836200000),
//       y: [6575.96, 6589, 6571.77, 6588.92]
//     },
//     {
//       x: new Date(1538838000000),
//       y: [6588.92, 6594, 6577.55, 6589.22]
//     },
//     {
//       x: new Date(1538839800000),
//       y: [6589.3, 6598.89, 6589.1, 6596.08]
//     },
//     {
//       x: new Date(1538841600000),
//       y: [6597.5, 6600, 6588.39, 6596.25]
//     },
//     {
//       x: new Date(1538843400000),
//       y: [6598.03, 6600, 6588.73, 6595.97]
//     },
//     {
//       x: new Date(1538845200000),
//       y: [6595.97, 6602.01, 6588.17, 6602]
//     },
//     {
//       x: new Date(1538847000000),
//       y: [6602, 6607, 6596.51, 6599.95]
//     },
//     {
//       x: new Date(1538848800000),
//       y: [6600.63, 6601.21, 6590.39, 6591.02]
//     },
//     {
//       x: new Date(1538850600000),
//       y: [6591.02, 6603.08, 6591, 6591]
//     },
//     {
//       x: new Date(1538852400000),
//       y: [6591, 6601.32, 6585, 6592]
//     },
//     {
//       x: new Date(1538854200000),
//       y: [6593.13, 6596.01, 6590, 6593.34]
//     },
//     {
//       x: new Date(1538856000000),
//       y: [6593.34, 6604.76, 6582.63, 6593.86]
//     },
//     {
//       x: new Date(1538857800000),
//       y: [6593.86, 6604.28, 6586.57, 6600.01]
//     },
//     {
//       x: new Date(1538859600000),
//       y: [6601.81, 6603.21, 6592.78, 6596.25]
//     },
//     {
//       x: new Date(1538861400000),
//       y: [6596.25, 6604.2, 6590, 6602.99]
//     },
//     {
//       x: new Date(1538863200000),
//       y: [6602.99, 6606, 6584.99, 6587.81]
//     },
//     {
//       x: new Date(1538865000000),
//       y: [6587.81, 6595, 6583.27, 6591.96]
//     },
//     {
//       x: new Date(1538866800000),
//       y: [6591.97, 6596.07, 6585, 6588.39]
//     },
//     {
//       x: new Date(1538868600000),
//       y: [6587.6, 6598.21, 6587.6, 6594.27]
//     },
//     {
//       x: new Date(1538870400000),
//       y: [6596.44, 6601, 6590, 6596.55]
//     },
//     {
//       x: new Date(1538872200000),
//       y: [6598.91, 6605, 6596.61, 6600.02]
//     },
//     {
//       x: new Date(1538874000000),
//       y: [6600.55, 6605, 6589.14, 6593.01]
//     },
//     {
//       x: new Date(1538875800000),
//       y: [6593.15, 6605, 6592, 6603.06]
//     },
//     {
//       x: new Date(1538877600000),
//       y: [6603.07, 6604.5, 6599.09, 6603.89]
//     },
//     {
//       x: new Date(1538879400000),
//       y: [6604.44, 6604.44, 6600, 6603.5]
//     },
//     {
//       x: new Date(1538881200000),
//       y: [6603.5, 6603.99, 6597.5, 6603.86]
//     },
//     {
//       x: new Date(1538883000000),
//       y: [6603.85, 6605, 6600, 6604.07]
//     },
//     {
//       x: new Date(1538884800000),
//       y: [6604.98, 6606, 6604.07, 6606]
//     },
//   ],
//   "#complete-card__chart-candlestick-1"
// );


/// Complete Card - Overall Growth Depth Chart /// 

function depthChart(dataBuy, dataSell, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var depthChartOpt = {
      series: [
          {
            name: "Buy",
            data:  dataBuy
          },{
            name: "Sell",
            data:  dataSell
          }
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {show: false},
        zoom: {enabled: false}
      },
      grid: {
        show: false
      },
      colors: ['#11CABE', '#FA2256'],
      xaxis: {
        tickAmount: 7,
        labels: {
          style: {
            colors: '#5D6588',
            cssClass: 'fb-sm'
          },
        }
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#A5ADCF',
            cssClass: 'fb-sm'
          },
          formatter: function(val, index) {
            return (val / 1000) + 'K'
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        curve: 'straight'
      },
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      }
    };
    var depthChartRender = new ApexCharts(document.querySelector(htmlEl), depthChartOpt);
    depthChartRender.render();
  }
};

depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-1"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-2"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-3"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-4"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-5"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-6"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-7"
);
depthChart(
  [
    {"x":479,"y":5840},
    {"x":480,"y":4840},
    {"x":486,"y":3840},
    {"x":490,"y":3440},
    {"x":491,"y":3240},
    {"x":492,"y":2740},
    {"x":493,"y":1740},
    {"x":494,"y":1440},
    {"x":496,"y":1140},
    {"x":497,"y":340},
    {"x":498,"y":190},
    {"x":499,"y":170},
    {"x":500,"y":100},
    {"x":501,"y":null},
    {"x":502,"y":null},
    {"x":503,"y":null},
    {"x":504,"y":null},
    {"x":510,"y":null},
    {"x":511,"y":null},
    {"x":513,"y":null},
    {"x":514,"y":null},
    {"x":517,"y":null},
    {"x":520,"y":null}
  ],
  [
    {"x":479,"y":null},
    {"x":480,"y":null},
    {"x":486,"y":null},
    {"x":490,"y":null},
    {"x":491,"y":null},
    {"x":492,"y":null},
    {"x":493,"y":null},
    {"x":494,"y":null},
    {"x":496,"y":null},
    {"x":497,"y":null},
    {"x":498,"y":null},
    {"x":499,"y":null},
    {"x":500,"y":null},
    {"x":501,"y":9},
    {"x":502,"y":184},
    {"x":503,"y":1184},
    {"x":504,"y":1909},
    {"x":510,"y":2009},
    {"x":511,"y":2459},
    {"x":513,"y":3809},
    {"x":514,"y":4109},
    {"x":517,"y":5109},
    {"x":520,"y":6109}
  ],
  "#complete-card__chart-depth-8"
);

// Table Type 2 Chart
function tableChart(name, data, color, categories, htmlEl) {
  if ($(htmlEl)[0]){  // check if this page have this class
    var options = {
      series: [
        {
          name: name,
          data: data
        }
      ],
      chart: {
        width: 130,
        height: 90,
        type: 'area',
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {show: false},
        zoom: {
          enabled: false
        },
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [color],
      stroke: {
        width: 1,
        curve: 'straight'
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 80, 100]
        }
      },
      grid: {
        show:false,
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: categories,
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      },
      yaxis: {
        axisBorder: {show: false,},
        axisTicks: {show: false,},
        labels: {show: false},
      }
    };

    var chart = new ApexCharts(document.querySelector(htmlEl), options);
    chart.render();
  }
}

tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-1"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-2"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-3"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-4"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-5"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-6"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-7"
);
tableChart(
  "Table Chart", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#table__chart-8"
);
/******/ })()
;
//# sourceMappingURL=chart.js.map