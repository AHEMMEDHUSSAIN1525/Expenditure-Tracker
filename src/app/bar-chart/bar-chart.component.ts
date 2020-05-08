import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-bar',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("barchart", am4charts.XYChart3D);
    

// Add data
chart.data = [{
  "Months": "January",
  "expenditure": 3025
}, {
  "Months": "February",
  "visits": 1882
}, {
  "Months": "March",
  "visits": 1809
}, {
  "Months": "April",
  "visits": 1322
}, {
  "Months": "May",
  "visits": 1122
}, {
  "Months": "June",
  "visits": 1114
}, {
  "Months": "July",
  "visits": 984
}, {
  "Months": "August",
  "visits": 1711
}, {
  "Months": "September",
  "visits": 665
}, {
  "Months": "October",
  "visits": 580
}, {
  "Months": "November",
  "visits": 1443
}, {
  "Months": "December",
  "visits": 441
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Months";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 80;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.sequencedInterpolation = true;
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "Months";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;

series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;

// on hover, make corner radiuses bigger
let hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Cursor
/* chart.cursor = new am4charts.XYCursor(); */

  }

}
