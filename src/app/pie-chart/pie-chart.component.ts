import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-pie',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("piechart", am4charts.PieChart3D);
    chart.legend = new am4charts.Legend(); 
    chart.data = [{
      "Type": "Income",
      "Amount": 500000,
      "color": am4core.color("red")
    }, {
      "Type": "Expenditure",
      "Amount": 400000,
      "color": am4core.color("green")
    },  ];
    
    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
     pieSeries.dataFields.value = "Amount";
     pieSeries.dataFields.category = "Type"; 
     pieSeries.slices.template.propertyFields.fill = "color";
    

  }

}
