import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroService } from './services/cadastro.service';
import { CategoriaFormComponent } from './component/categoria-form/categoria-form.component';
import { CategoriaDetalhesComponent } from './component/categoria-detalhes/categoria-detalhes.component';
import { PerguntaFormComponent } from './component/pergunta-form/pergunta-form.component';
import { PerguntaDetalhesComponent } from './component/pergunta-detalhes/pergunta-detalhes.component';
import { TimeFormComponent } from './component/time-form/time-form.component';
import { TimeDetalhesComponent } from './component/time-detalhes/time-detalhes.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { UsuarioDetalhesComponent } from './component/usuario-detalhes/usuario-detalhes.component';
import { UsuarioListaComponent } from './component/usuario-lista/usuario-lista.component';

@NgModule({
  declarations: [
    CategoriaFormComponent,
    CategoriaDetalhesComponent,
    PerguntaFormComponent,
    PerguntaDetalhesComponent,
    TimeFormComponent,
    TimeDetalhesComponent,
    UsuarioFormComponent,
    UsuarioDetalhesComponent,
    UsuarioListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [CadastroService]
})
export class AppModule { }
