/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/assets/js/pages/wallet-page-v1.js ***!
  \***********************************************/
//wallet chart
function walletChart(data1, data2, categories, htmlEl) {
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

walletChart(
  [ 0, 5, 15, 12, 10, 12, 8, 10, 0 ],
  [ 0, 8, 12, 15, 20, 15, 12, 10, 0 ],
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  "#standard-card__content-chart-8-1"
);

/******/ })()
;
//# sourceMappingURL=wallet-page-v1.js.map