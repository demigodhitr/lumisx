/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./src/assets/js/pages/dashboard-page-v1.js ***!
  \**************************************************/
//Assets Carousel
$('.assets__carousel').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 3.75,
  slidesToScroll: 1,
  prevArrow: $('.assets-carousel__prev'),
  nextArrow: $('.assets-carousel__next'),
  appendDots: $('.assets-carousel__slick-slider-dots'),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows:true,
        dots: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows:true,
        dots: false,
        infinite: false,
        slidesToShow: 3.25,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1064,
      settings: {
        arrows:true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows:true,
        dots: false,
        infinite: false,
        slidesToShow: 2.25,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1.25,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Charts on Assets Carousel
function cardChart(name, data, color, categories, htmlEl) {
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

cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#11CABE',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-3-2"
);

cardChart(
  "Desktops", 
  [ 5, 0, 6, 0, 10, 2, 1, 6, 10, 6, 12, 17, 17, 22, 17, 19, 18, 22, 18, 19,17, 13, 15, 14, 14, 15, 13, 13, 10, 12 ],
  '#FA2256',
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
  "#standard-card__content-chart-5-2"
);

/******/ })()
;
//# sourceMappingURL=dashboard-page-v1.js.map