# Line Chart with 1+ Series

![Line chart with any number of series](../images/line-chart.png)

In `data.csv`, each row is a series. Each series consists of the same number of columns: series name,
and values. There can be any number of series (rows) and any number of columns.

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Chart.js documentation](https://www.chartjs.org/docs/latest/).

```javascript
var TITLE = 'Hartford School District is No Longer the Largest in Connecticut';

// Which column names contain data points?
var X_LABELS = ['2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19'];

// Which column name contains names (labels) for each series?
var NAMES = 'district';

// Optionally, which column contains color names for the series?
// If not specified, will apply default color scheme
var COLORS = 'color';

var X_AXIS = 'Academic Year';  // x-axis label and label in tooltip
var Y_AXIS = 'Number of students'; // y-axis label and label in tooltip

var SHOW_GRID = true; // `true` to show the grid, `false` to hide
var SHOW_LEGEND = true; // `true` to show the legend, `false` to hide
```

## See also
See **Line Chart with CSV Data** chapter in DataVizForAll: https://datavizforall.org/line-chart-with-csv-data.html