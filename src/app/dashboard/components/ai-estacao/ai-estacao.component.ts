import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ThemePalette} from "@angular/material/core";
import {ChartDataSets, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import {FormControl, FormGroup} from "@angular/forms";
import {LocalstorageService, LocalUser} from "../../../utils";
import {Empresa} from "../../models";
import {BreakpointObserver} from "@angular/cdk/layout";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-ai-estacao',
  templateUrl: './ai-estacao.component.html',
  styleUrls: ['./ai-estacao.component.css']
})
export class AiEstacaoComponent implements OnInit {

  firstTimePage: boolean = true
  wichVarChart: string
  btnColorTemp: ThemePalette = 'primary';
  btnColorUmid: ThemePalette = 'primary';
  btnColorPressao: ThemePalette = 'primary';
  btnColorVento: ThemePalette = 'primary';
  time: string[] = []
  value: number[] = []
  time_prev: string[] = []
  value_prev: number[] = []

  // Grafico Temperatura,
  public tempchartData: ChartDataSets[] = [{data: this.value, label: 'Atual'},{data: this.value_prev, label: 'Previsão'}]
  //public tempchartData: ChartDataSets[] = [{data: this.value, label: 'Atual'}]
  public tempchartType: ChartType = 'line'
  public tempchartLabels: Label[] = this.time
  public tempchartLegend: boolean = true
  public tempChartColor: Color[] = [{backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#FF6666'},
    {backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#99CCFF'}]

  // Grafico Umidade,
  public umidchartData: ChartDataSets[] = [{data: this.value, label: 'Atual'},{data: this.value_prev, label: 'Previsão'}]
  public umidchartType: ChartType = 'line'
  public umidchartLabels: Label[] = this.time
  public umidchartLegend: boolean = true
  public umidChartColor: Color[] = [{backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#FF6666'},
    {backgroundColor: 'rgba(224, 224, 224, 0.1)', borderColor: '#99CCFF'}]


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dev_id: string
  dev_empresa: string
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
  ) {
  }

  ngOnInit(): void {

    // Inciando chart com 7 dias anteriores
    let a = new Date;
    this.range.value.end = new Date()
    a.setDate(a.getDate() - 7);
    this.range.value.start = a

    // dev_id do equipamento
    this.activeRouter.params.subscribe((res: any) => {
      this.dev_id = res.dev_id
      this.dev_empresa = res.dev_empresa
    })

    // Qual chart renderiza primeiro
    if (this.firstTimePage) {
      this.wichVarChart = 'temp';
      this.btnColorTemp = 'accent';
      this.getDataChart()
    } else {
      this.getDataChart()
    }


  }

  // Realiza GET na API IOT para obter dados reais
  getDataChart() {

    this.localUser = this.localStorageService.getLocalUser()
    this.dashService.getForecast2daysLSTM(Math.ceil(Date.parse(this.range.value.end)/1000), "f803320100027b40", this.wichVarChart, "samples")
      .subscribe(res => {

          if (Object.keys(res).length > 0) {

            if (Object.keys(this.time).length > 0) {
              this.time.splice(0, Object.keys(this.time).length);
              this.value.splice(0, Object.keys(this.value).length);
              this.time_prev.splice(0, Object.keys(this.time_prev).length);
              this.value_prev.splice(0, Object.keys(this.value_prev).length);
            }

            for (let i = 0; i < Object.keys(res).length; i++) {

              if (i<95) {
                this.time.push(res[i]['time']);
                if (this.wichVarChart == 'temp') {
                  this.value.push(Math.round((res[i]['value']) * 100) / 100);
                  this.value_prev.push(Math.round((res[i]['value']) * 100) / 100);
                } else {
                  this.value.push(Math.round(res[i]['value'] * 100) / 100);
                  this.value_prev.push(Math.round((res[i]['value']) * 100) / 100);
                }
              } else {
                this.time.push(res[i]['time']);
                if (this.wichVarChart == 'temp') {
                  this.value_prev.push(Math.round((res[i]['value']) * 100) / 100);
                } else {
                  this.value_prev.push(Math.round(res[i]['value'] * 100) / 100);
                }
              }


            }

            //this.time = this.time.slice(48)
            // this.value_prev = this.value.slice(-48)
            // this.value = this.value.slice(48)
            //
            // console.log(this.value)
            // console.log(this.value_prev)
            //this.time_prev = this.time.slice(-48)

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
    if (Object.keys(this.time).length > 0) {
      this.time.splice(0, Object.keys(this.time).length);
      this.value.splice(0, Object.keys(this.value).length);
      this.time_prev.splice(0, Object.keys(this.time_prev).length);
      this.value_prev.splice(0, Object.keys(this.value_prev).length);
    }
    if (v == 'temp') {
      this.btnColorTemp = 'accent'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    } else if (v == 'humid') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'accent';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'primary';
    } else if (v == 'pressure') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'accent';
      this.btnColorVento = 'primary';
    } else if (v == 'wind') {
      this.btnColorTemp = 'primary'
      this.btnColorUmid = 'primary';
      this.btnColorPressao = 'primary';
      this.btnColorVento = 'accent';
    }
    this.firstTimePage = false
    this.ngOnInit()
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
    });
  }
}
