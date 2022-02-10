import {Component, OnInit} from '@angular/core';
import {Chart, ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {ChartsModule, Label, Color, MultiDataSet} from "ng2-charts";
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {BreakpointObserver} from "@angular/cdk/layout";
import {LocalstorageService, LocalUser} from "../../../utils";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Empresa} from "../../models";

@Component({
  selector: 'app-info-estacao',
  templateUrl: './info-estacao.component.html',
  styleUrls: ['./info-estacao.component.css']
})
export class InfoEstacaoComponent implements OnInit{
  showChart: string
  btnColorTemp: ThemePalette = 'primary';
  btnColorUmid: ThemePalette = 'primary';
  btnColorPressao: ThemePalette = 'primary';
  btnColorVento: ThemePalette = 'primary';
  tempo: string[] = ['01-10','02-10','03-10','04-10','05-10','06-10','07-10','08-10','09-10','10-10','11-10','12-10','13-10','14-10','15-10','16-10','17-10','18-10','19-10','20-10']

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dev_id = '';

  localUser: LocalUser
  empresas: Empresa[]
  showSpinner: boolean = false
  dataSource: any
  public estacoes: any[];

  constructor(
    private activeRouter: ActivatedRoute,
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService,
    private router: Router,
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {

    // Inciando chart com 7 dias anteriores
    let a = new Date;
    this.range.value.start = new Date()
    a.setDate(a.getDate()-7);
    this.range.value.end = a

    // GET IOT para dados reais
    this.getDataChart()

    // Qual chart renderiza primeiro
    this.showChart = 'temp';
    this.btnColorTemp = 'accent';

    // dev_id do equipamento
    this.activeRouter.params.subscribe((res: any) => {
      this.dev_id = res.sn_endpoint
    })

  }

  // Realiza GET na API IOT para obter dados reais
  getDataChart() {
    let data = JSON.parse(JSON.stringify(this.range.value));
    console.log("start: "+Math.ceil(Date.parse(data['start'])/1000))
    console.log("end: "+Math.ceil(Date.parse(data['end'])/1000))
    console.log("dev_id: "+this.dev_id)
  }

  // Grafico Temperatura,
  public tempchartData: ChartDataSets[] = [{data: [21,20,18,22,23,19,20,21,16,24,23,22,18,20,20,18,25], label: 'Atual'},{data: [21,20,18,22,23,19,20,21,16,24,23,22,18,20,20,18,25,24,22,25], label: 'Previsão'}]
  public tempchartType: ChartType =   'line'
  public tempchartLabels: Label[] = this.tempo
  public tempchartLegend: boolean = true
  public tempChartColor: Color[] = [{ backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#FF6666'},{ backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#99CCFF'}]

  // Grafico Umidade
  public umidchartData: ChartDataSets[] = [{data: [80,85,82,80,90,80,85,70,92,91,88,85,88,75,89,90,93], label: 'Atual'},{data: [80,85,82,80,90,80,85,70,92,91,88,85,88,75,89,90,93,80,85,82,90], label: 'Previsão'}]
  public umidchartType: ChartType =   'line'
  public umidchartLabels: Label[] = this.tempo
  public umidchartLegend: boolean = true
  public umidChartColor: Color[] = [{ backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#FF6666'},{ backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#99CCFF'}]

  // Grafico Vento Direção
  public ventoDirchartData: ChartDataSets[] = [{data: [0,0,0,1], label: 'Graus'}]
  public ventoDirchartType: ChartType =   'radar'
  public ventoDirchartLabels: Label[] = ['Leste','Sul','Oeste','Norte']
  public ventoDirchartLegend: boolean = false
  public ventodirchartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    }
  };

  // Grafico velocidade
  public doughnutChartLabels: Label[] = ['Atual', 'Máxima'];
  public doughnutChartData: MultiDataSet = [
    [100, 450]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {rotation: 1 * Math.PI, circumference: 1 * Math.PI}
  public velVentochartLegend: boolean = false

  choiceVar(v: string) {
    this.showChart = v
    if (v == 'temp') {
      this.btnColorTemp = 'accent'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    }
    else if (v == 'umid') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'accent';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    }
    else if (v == 'pressao') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'accent';
      this.btnColorVento = 'primary';
    }
    else if (v == 'vento') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'accent';
    }

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
