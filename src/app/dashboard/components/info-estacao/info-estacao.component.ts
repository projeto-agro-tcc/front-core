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

  firstTimePage: boolean = true
  wichVarChart: string
  btnColorTemp: ThemePalette = 'primary';
  btnColorUmid: ThemePalette = 'primary';
  btnColorPressao: ThemePalette = 'primary';
  btnColorVento: ThemePalette = 'primary';
  time: string[] = []
  value: number[] = []

  // Grafico Temperatura,
  //public tempchartData: ChartDataSets[] = [{data: [21,20,18,22,23,19,20,21,16,24,23,22,18,20,20,18,25], label: 'Atual'},{data: [21,20,18,22,23,19,20,21,16,24,23,22,18,20,20,18,25,24,22,25], label: 'Previsão'}]
  public tempchartData: ChartDataSets[] = [{data: this.value, label: 'Atual'}]
  public tempchartType: ChartType =   'line'
  public tempchartLabels: Label[] = this.time
  public tempchartLegend: boolean = true
  public tempChartColor: Color[] = [{ backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#FF6666'},
    { backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#99CCFF'}]

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dev_id: string
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
    this.range.value.end = new Date()
    a.setDate(a.getDate()-7);
    this.range.value.start = a

    // dev_id do equipamento
    this.activeRouter.params.subscribe((res: any) => {
      this.dev_id = res.dev_id
    })

    // Qual chart renderiza primeiro
    if (this.firstTimePage) {
      this.wichVarChart = 'temp';
      this.btnColorTemp = 'accent';
      this.getDataChart()
    }


  }

  // Realiza GET na API IOT para obter dados reais
  getDataChart() {

    let date = JSON.parse(JSON.stringify(this.range.value));
    let start = Math.ceil(Date.parse(date['start'])/1000)
    let end = Math.ceil(Date.parse(date['end'])/1000)

    console.log(start, end)

    this.localUser = this.localStorageService.getLocalUser()
    this.dashService.getRealData6hour(start,end,this.dev_id,this.wichVarChart)
      .subscribe(res => {

          if (Object.keys(res).length > 0){
            if (Object.keys(this.time).length > 0) {
              this.time.splice(0, Object.keys(this.time).length);
              this.value.splice(0, Object.keys(this.time).length);
            }

            for (let i = 0; i < Object.keys(res).length; i++) {
              this.time.push(res[i]['time']);
              if (this.wichVarChart=='temp') {
                this.value.push(res[i]['value']-273.15);
              } else {
                this.value.push(res[i]['value']);
              }

            }
          } else {
            console.log("Nenhum dado retornado")
          }

        },
        error => {
          this.openSnackBar("Problemas ao carregar dados", "danger")
        })

  }


  choiceVar(v: string) {
    this.wichVarChart = v
    if (v == 'temp') {
      this.btnColorTemp = 'accent'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    }
    else if (v == 'humid') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'accent';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    }
    else if (v == 'pressure') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'accent';
      this.btnColorVento = 'primary';
    }
    else if (v == 'wind') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'accent';
    }
    this.firstTimePage = false
    this.ngOnInit()
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
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
