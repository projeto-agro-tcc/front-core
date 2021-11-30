import {
  Component,
  OnInit,
  NgModule,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import * as L from 'leaflet';
import {Chart, ChartDataSets, ChartType} from 'chart.js';
import {ChartsModule, Label} from "ng2-charts";


@Component({
  selector: 'app-info-estacao',
  templateUrl: './info-estacao.component.html',
  styleUrls: ['./info-estacao.component.css']
})
export class InfoEstacaoComponent implements OnInit{
  showChart: string
  public chartData: ChartDataSets[] = [{data: [5,20,7,18,20], label: 'Temperatura'}]
  public chartType: ChartType =   'line'
  public chartType2: ChartType =   'bar'
  public chartLabels: Label[] = ['a','b','c','d','e']

  constructor() {

  }

  ngOnInit(): void {
    this.showChart = 'temp'; // hide chart at the beginning
  }


  // async ngAfterViewInit(){
  //   await this.drawTemp()
  //   await this.drawUmid()
  // }

  drawTemp() {
    const tempCanvas = <HTMLCanvasElement> document.getElementById('temp');
    const tempCtx = tempCanvas.getContext('2d');

    const temp = new Chart(tempCtx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b'],
        datasets: [{
          label: '°C',
          data: [70, 80, 3, 5, 2, 3, 25, 25],
          borderColor: '#00AEFF',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Temperatura Mínima'
          },
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)'
            }
          }
        }
      }
    });

    return true

  }

  drawUmidd() {

    const umidadeCanvas = <HTMLCanvasElement> document.getElementById('umidade');
    const umidadeCtx = umidadeCanvas.getContext('2d');

    const umidade = new Chart(umidadeCtx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b'],
        datasets: [{
          label: '°C',
          data: [80, 80, 75, 55, 89, 56, 78, 45],
          borderColor: '#00AEFF',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Temperatura Mínima'
          },
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)'
            }
          }
        }
      }
    });

    return true
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
