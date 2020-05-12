# Bubble Chart with One Series

![Bubble chart with one series](../images/bubble-chart.png)

`data.csv` needs to contain 4 columns: x-values, y-values, radius, and name of each data point.

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Chart.js documentation](https://www.chartjs.org/docs/latest/).

```javascript
var TITLE = 'Income, Test Scores, and Enrollment in Select Connecticut School Districts, 2009-13';

var POINT_X = 'income'; // column name for x values in data.csv
var POINT_X_PREFIX = '$'; // prefix for x values, eg '$'
var POINT_X_POSTFIX = ''; // postfix for x values, eg '%'

var POINT_Y = 'grades'; // column name for y values in data.csv
var POINT_Y_PREFIX = ''; // prefix for x values, eg 'USD '
var POINT_Y_POSTFIX = ''; // postfix for x values, eg ' kg'

var POINT_R = 'enrollment'; // column name for radius in data.csv
var POINT_R_DESCRIPTION = 'Enrollment'; // description of radius value
var POINT_R_PREFIX = ''; // prefix for radius values, eg 'USD '
var POINT_R_POSTFIX = ' students'; // postfix for radius values, eg ' kg'
var R_DENOMINATOR = 800;  // use this to scale the dot sizes, or set to 1 if your dataset contains precise radius values

var POINT_NAME = 'district'; // point names that appear in tooltip
var POINT_COLOR = 'rgba(0,0,255,0.7)'; // point color, eg `black` or `rgba(10, 100, 44, 0.8)`

var X_AXIS = 'Median Household Income, USD';  // x-axis label and label in tooltip
var Y_AXIS = 'Grade, Relative to Average'; // y-axis label and label in tooltip

var SHOW_GRID = true; // `true` to show the grid, `false` to hide
```

## See also

See **Bubble Chart with CSV Data** chapter in handsondataviz: https://handsondataviz.org/bubble-chart-with-csv-data.html