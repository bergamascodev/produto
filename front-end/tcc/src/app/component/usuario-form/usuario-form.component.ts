import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.sass']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  times: any[] = [];

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService) {}

  ngOnInit() {
    this.initializeForm();
    this.loadTimes();
  }

  initializeForm() {
    this.usuarioForm = this.formBuilder.group({
      timeId: [null, Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: [true, Validators.required]
    });
  }

  loadTimes() {
    this.cadastroService.obterTime().subscribe(
      (time) => {
        this.times = time;
      },
      (error) => {
        console.error('Erro ao carregar times:', error);
      }
    );
  }

  createUser() {
    if (this.usuarioForm.invalid) {
      return;
    }

    const usuario = this.usuarioForm.value;

    this.cadastroService.criarUsuario(usuario).subscribe(
      () => {
        console.log('Usuário criado');
        this.usuarioForm.reset();
      },
      (error) => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }
}
