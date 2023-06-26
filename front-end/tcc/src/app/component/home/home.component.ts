import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.sass']
})

export class HomeComponent implements OnInit {
categorias: any[] = [];
times: any[] = [];
usuarios: any[] = [];
perguntas: any[] = [];

constructor(private cadastroService: CadastroService) { }

ngOnInit(): void {
  this.obterCategorias();
  this.obterTimes();
  this.obterUsuarios();
  this.obterPerguntas();
}

obterCategorias() {
  this.cadastroService.obterCategorias().subscribe((response) => {
    this.categorias = response;
  });
}

obterTimes() {
  this.cadastroService.obterTimes().subscribe((response) => {
    this.times = response;
  });
}

obterUsuarios() {
  this.cadastroService.obterUsuarios().subscribe((response) => {
    this.usuarios = response;
  });
}

obterPerguntas() {
  this.cadastroService.obterPerguntas().subscribe((response) => {
    this.perguntas = response;
  });
}

 }
