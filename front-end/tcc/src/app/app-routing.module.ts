import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { CategoriaFormComponent } from './component/categoria-form/categoria-form.component';
import { PerguntaFormComponent } from './component/pergunta-form/pergunta-form.component';
import { TimeFormComponent } from './component/time-form/time-form.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'categorias', component: CategoriaFormComponent },
  { path: 'pergunta', component: PerguntaFormComponent, canActivate: [AuthService] },
  { path: 'time', component: TimeFormComponent, canActivate: [AuthService] },
  { path: 'usuario', component: UsuarioFormComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/categorias', pathMatch: 'full' },
  { path: '**', redirectTo: '/categorias', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
