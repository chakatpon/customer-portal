import React from "react";
import { Doughnut } from "react-chartjs-2";

const mockingData = {
  // maintainAspectRatio: true,
  datasets: [
    {
      data: [2, 1, 4],
      backgroundColor: ["#0033a2", "#0c59cf", "#4484e6"],
      borderWidth: 0
    }
  ],
  labels: ["NON-MOTOR", "VMI", "CMI"]
};

const options = {
  //   responsive: false,
  maintainAspectRatio: true,
  cutoutPercentage: 55, // for adjust thickness of Doughnut.
  layout: {
    padding: {
      left: 0,
      right: 30,
      top: 30,
      bottom: 30
    }
  },
  legend: {
    display: true,
    position: "right",
    labels: {
      usePointStyle: true,
      padding: 10
    }
  },
  elements: {
    career: {
      textTop: "สัดส่วนการ",
      textBottom: "เคลม/ปี",
      color: "#0033a2", //Default black
      fontStyle: "db_sathorn_regular", //Default Arial
      sidePadding: 15 //Default 20 (as a percentage)
    }
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var total = meta.total;
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
        return currentValue + " (" + percentage + "%)";
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      }
    }
  },
  plugins: {
    datalabels: {
      formatter: function (value, context) {
        let sum = context.dataset.data.reduce(function (a, b) {
          return a + b;
        }, 0);
        let percentage = ((value / sum) * 100).toFixed(1);
        return percentage + "%";
      },
      color: ["#0033a2", "#0c59cf", "#4484e6"],
      anchor: "end",
      align: "end",
      font: {
        family: "'db_sathorn_regular', sans-serif",
        size: "16",
        weight: "bold"
      }
    }
  }
};

class SummaryChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const mockingData = 300;
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.career) {
          //Get ctx from string
          var ctx = chart.chart.ctx;

          //Get options from the center object in options
          var careerConfig = chart.config.options.elements.career;
          var fontStyle = careerConfig.fontStyle || "Arial";
          var txtTop = careerConfig.textTop;
          var txtBottom = careerConfig.textBottom;
          var color = careerConfig.color || "#000";
          var sidePadding = careerConfig.sidePadding || 20;
          var sidePaddingCalculated =
            (sidePadding / 100) * (chart.innerRadius * 2);
          //Start with a base font of 30px
          ctx.font = "40px " + fontStyle;

          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txtTop).width;
          var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = chart.innerRadius * 2;

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight);

          //Set font settings to draw it correctly.
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          //Draw text in center
          ctx.fillText(txtTop, centerX, centerY - 15);
          ctx.fillText(txtBottom, centerX, centerY + 15);

          let _fill = ctx.fill;
          ctx.fill = function () {
            ctx.save();
            ctx.shadowColor = "grey";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            _fill.apply(this, arguments);
            ctx.restore();
          };
        }
      }
    });
  }

  render() {
    return (
      <div className="summary-chart">
        <Doughnut data={mockingData} options={options}></Doughnut>
      </div>
    );
  }
}

export default SummaryChart;
