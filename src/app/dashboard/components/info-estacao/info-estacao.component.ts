import {Component, OnInit, NgModule, ViewChild, ElementRef,QueryList, ViewChildren} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import * as L from 'leaflet';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-info-estacao',
  templateUrl: './info-estacao.component.html',
  styleUrls: ['./info-estacao.component.css']
})
export class InfoEstacaoComponent implements OnInit{

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){
    const tempMax = new Chart("tempMax", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '°C',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: '#00AEFF',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Temperatura Máxima'
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
    const tempMin = new Chart("tempMin", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b'],
        datasets: [{
          label: '°C',
          data: [12, 19, 3, 5, 2, 3, 25, 25],
          borderColor: '#00AEFF',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
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
