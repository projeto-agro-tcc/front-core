import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ai-estacao',
  templateUrl: './ai-estacao.component.html',
  styleUrls: ['./ai-estacao.component.css']
})
export class AiEstacaoComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  pageAIEstacao(estacao_id: string, estacao_empresa: string) {
    this.router.navigate(['/dashboard/ai-estacao', {}])
  }

}
