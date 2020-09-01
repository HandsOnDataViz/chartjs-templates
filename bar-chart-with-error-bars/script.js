$(document).ready(function() {

  var HORIZONTAL = false;   // `false` for vertical (column) chart, `true` for horizontal bar
  var STACKED = false;  // `false` for individual bars, `true` for stacked bars

  var TITLE = 'Household Income for Select US Geographies, 2018';

  var LABELS = 'geo';  // Column to define 'bucket' names (x axis)

  var SERIES = [  // For each column representing a series, define its name and color
    {
      column: 'median',
      name: 'Median Income',
      color: 'grey',
      errorColumn: 'median_moe'
    },
    {
      column: 'mean',
      name: 'Mean Income',
      color: '#cc9999',
      errorColumn: 'mean_moe'
    }
  ];

  var X_AXIS = 'Geography';  // x-axis label and label in tooltip
  var Y_AXIS = 'US Dollars'; // y-axis label and label in tooltip

  var SHOW_GRID = true; // `true` to show the grid, `false` to hide
  var SHOW_LEGEND = true; // `true` to show the legend, `false` to hide

  // Read data file and create a chart
  d3.csv('data.csv').then(function(rows) {

    var datasets = SERIES.map(function(el) {
      return {
        label: el.name,
        labelDirty: el.column,
        backgroundColor: el.color,
        errorColumn: el.errorColumn,
        data: [],
        errorBars: {}
      }
    });

    rows.map(function(row) {
      datasets.map(function(d) {
        d.data.push(row[d.labelDirty])
        d.errorBars[row[LABELS]] = {
          plus: parseFloat(row[d.errorColumn]),
          minus: 0-parseFloat(row[d.errorColumn])
        }
      })
    });

		var barChartData = {
      labels: rows.map(function(el) { return el[LABELS] }),
			datasets: datasets
    };

    var ctx = document.getElementById('container').getContext('2d');

    new Chart(ctx, {
      type: HORIZONTAL ? 'horizontalBar' : 'bar',
      data: barChartData,
      
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 14,
        },
        legend: {
          display: SHOW_LEGEND,
          onClick: null,
        },
        scales: {
          xAxes: [{
            stacked: STACKED,
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: STACKED,
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              console.log(tooltipItem, all)
              return all.datasets[tooltipItem.datasetIndex].label
                + ': ' + tooltipItem.yLabel.toLocaleString()
                + (all.datasets[tooltipItem.datasetIndex].errorBars[tooltipItem.label].plus ? ' ± ' + all.datasets[tooltipItem.datasetIndex].errorBars[tooltipItem.label].plus.toLocaleString() : '');
            }
          }
        },
        plugins: {
          chartJsPluginErrorBars: {
            color: 'black',
          }
        }
      }
    });

  });

});