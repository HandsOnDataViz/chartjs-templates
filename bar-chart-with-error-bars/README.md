# Bar Chart with 1+ Series (with error bars)

![Bar chart with any number of series](../images/bar-chart-with-error-bars.png)

Depending on the `HORIZONTAL` variable set to `true` or `false` in `script.js`,
can be shown as horizontal bar chart or vertical (column) chart.
Can be either **stacked** (if `STACKED` is set to `true`) or unstacked (regular).

`data.csv` needs to contain at least 2 columns: labels and values for at least one series. There can be any number of series. Error bar values (margins of errors) have to be in a separate column whose name is defined by `errorColumn` property (see code snippet below).

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Chart.js documentation](https://www.chartjs.org/docs/latest/).

```javascript
  var HORIZONTAL = false;   // `false` for vertical (column) chart, `true` for horizontal bar 
  var STACKED = false;  // `false` for individual bars, `true` for stacked bars

  var TITLE = 'English Learners by Select School Districts in Connecticut, 2018-19';

  var LABELS = 'district';  // Column to define 'bucket' names (x axis)

  var SERIES = [  // For each column representing a series, define its name and color
    {
      column: 'median',
      name: 'Median Income',
      color: 'grey',
      errorColumn: 'median_moe' // column name of error bar data, here `moe` stands for margins of errors
    },
    {
      column: 'mean',
      name: 'Mean Income',
      color: '#cc9999',
      errorColumn: 'mean_moe'
    }
  ];

  var X_AXIS = 'School Districts';  // x-axis label and label in tooltip
  var Y_AXIS = 'Number of Enrolled Students'; // y-axis label and label in tooltip

  var SHOW_GRID = true; // `true` to show the grid, `false` to hide
  var SHOW_LEGEND = true; // `true` to show the legend, `false` to hide
```