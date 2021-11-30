import {Component, OnInit} from '@angular/core';
import {Chart, ChartDataSets, ChartType} from 'chart.js';
import {ChartsModule, Label} from "ng2-charts";

@Component({
  selector: 'app-info-estacao',
  templateUrl: './info-estacao.component.html',
  styleUrls: ['./info-estacao.component.css']
})
export class InfoEstacaoComponent implements OnInit{
  showChart: string

  // Grafico Temperatura
  public tempchartData: ChartDataSets[] = [{data: [21,20,18,22,23,24,16], label: 'Temperatura'}]
  public tempchartType: ChartType =   'line'
  public tempchartLabels: Label[] = ['01-10-2021','02-10-2021','03-10-2021','04-10-2021','05-10-2021','06-10-2021','07-10-2021']
  public tempchartLegend: boolean = false

  // Grafico Umidade
  public umidchartData: ChartDataSets[] = [{data: [88,80,90,50,66,90,84], label: 'Temperatura'}]
  public umidchartType: ChartType =   'line'
  public umidchartLabels: Label[] = ['01-10-2021','02-10-2021','03-10-2021','04-10-2021','05-10-2021','06-10-2021','07-10-2021']
  public umidchartLegend: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.showChart = 'temp'; // hide chart at the beginning
  }





























  // private map: L.Map;
  // private centroid: L.LatLngExpression = [42.3601, -71.0589]; //
  //
  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: this.centroid,
  //     zoom: 12
  //   });
  //
  //   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 18,
  //     minZoom: 10,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //   });
  //
  //   // create 5 random jitteries and add them to map
  //   const jittery = Array(5).fill(this.centroid).map(
  //     x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
  //   ).map(
  //     x => L.marker(x as L.LatLngExpression)
  //   ).forEach(
  //     x => x.addTo(this.map)
  //   );
  //
  //   tiles.addTo(this.map);
  //
  // }
  //
  //
  // ngOnInit(): void {
  //   this.initMap();
  // }
  // public multi: any[];
  // public view: any[] = [700, 300];
  //
  // // options
  // legend: boolean = false;
  // showLabels: boolean = true;
  // animations: boolean = true;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Dia';
  // yAxisLabel: string = 'Temperatura';
  // timeline: boolean = true;
  //
  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  // };
  //
  // constructor() {
  //   Object.assign(this, { multi });
  // }
  //
  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }
  //
  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }
  //
  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }


}
