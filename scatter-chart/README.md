# Scatter Chart with One Series

![Scatter chart with one series](../images/scatter-chart.png)

`data.csv` needs to contain 3 columns: x-values, y-values, and name of each data point.

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Chart.js documentation](https://www.chartjs.org/docs/latest/).

```javascript
  var TITLE = 'Income and Test Scores in Connecticut School Districts, 2009-13';

  var POINT_X = 'income'; // column name for x values in data.csv
  var POINT_X_PREFIX = '$'; // prefix for x values, eg '$'
  var POINT_X_POSTFIX = ''; // postfix for x values, eg '%'

  var POINT_Y = 'grades'; // column name for y values in data.csv
  var POINT_Y_PREFIX = ''; // prefix for x values, eg 'USD '
  var POINT_Y_POSTFIX = ''; // postfix for x values, eg ' kg'

  var POINT_NAME = 'district'; // point names that appear in tooltip
  var POINT_COLOR = 'rgba(0,0,255,0.7)'; // point color, eg `black` or `rgba(10, 100, 44, 0.8)`
  var POINT_RADIUS = 5; // radius of each data point

  var X_AXIS = 'Median Household Income, USD';  // x-axis label and label in tooltip
  var Y_AXIS = 'Grade, Relative to Average'; // y-axis label and label in tooltip

  var SHOW_GRID = true; // `true` to show the grid, `false` to hide
```

## See also

See **Scatter Chart with CSV Data** chapter in handsondataviz: https://handsondataviz.org/scatter-chart-with-csv-data.html