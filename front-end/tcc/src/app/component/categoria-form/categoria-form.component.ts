import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.sass']
})
export class CategoriaFormComponent {
  formCategoria: FormGroup;

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService) {
    this.formCategoria = this.formBuilder.group({
      descricao: ['', Validators.required]
    });
  }

  criarCategoria() {
    if (this.formCategoria.invalid) {
      return;
    }

    const categoria = this.formCategoria.value;

    this.cadastroService.criarCategoria(categoria).subscribe(
      () => {
        console.log('Categoria criada');
        this.formCategoria.reset();
      },
      (error) => {
        console.error('Erro ao criar categoria:', error);
      }
    );
  }
}
