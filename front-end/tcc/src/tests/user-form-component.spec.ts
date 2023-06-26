import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioFormComponent } from '../app/component/usuario-form/usuario-form.component';
import { CadastroService } from '../app/services/cadastro.service';
import { of, throwError } from 'rxjs';

describe('UsuarioFormComponent', () => {
  let component: UsuarioFormComponent;
  let fixture: ComponentFixture<UsuarioFormComponent>;
  let cadastroServiceSpy: jasmine.SpyObj<CadastroService>;

  beforeEach(async () => {
    const cadastroService = jasmine.createSpyObj('CadastroService', ['getTimes', 'createUser']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UsuarioFormComponent],
      providers: [
        FormBuilder,
        { provide: CadastroService, useValue: cadastroService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioFormComponent);
    component = fixture.componentInstance;
    cadastroServiceSpy = TestBed.inject(CadastroService) as jasmine.SpyObj<CadastroService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call initializeForm and loadTimes', () => {
      spyOn(component, 'initializeForm');
      spyOn(component, 'loadTimes');

      component.ngOnInit();

      expect(component.initializeForm).toHaveBeenCalled();
      expect(component.loadTimes).toHaveBeenCalled();
    });
  });

  describe('initializeForm', () => {
    it('should initialize the usuarioForm with the correct form controls', () => {
      component.initializeForm();

      expect(component.usuarioForm.get('timeId')).toBeTruthy();
      expect(component.usuarioForm.get('nome')).toBeTruthy();
      expect(component.usuarioForm.get('cpf')).toBeTruthy();
      expect(component.usuarioForm.get('email')).toBeTruthy();
      expect(component.usuarioForm.get('status')).toBeTruthy();

      expect(component.usuarioForm.get('timeId')?.value).toBeNull();
      expect(component.usuarioForm.get('nome')?.value).toBe('');
      expect(component.usuarioForm.get('cpf')?.value).toBe('');
      expect(component.usuarioForm.get('email')?.value).toBe('');
      expect(component.usuarioForm.get('status')?.value).toBe(true);

      expect(component.usuarioForm.get('timeId')?.validator).toEqual(Validators.required);
      expect(component.usuarioForm.get('nome')?.validator).toEqual(Validators.required);
      expect(component.usuarioForm.get('cpf')?.validator).toEqual(Validators.required);
      expect(component.usuarioForm.get('email')?.validator).toEqual([Validators.required, Validators.email]);
      expect(component.usuarioForm.get('status')?.validator).toEqual(Validators.required);
    });
  });

  describe('loadTimes', () => {
    it('should load times from the cadastroService', () => {
      const mockTimes = [{ id: 1, name: 'Time 1' }, { id: 2, name: 'Time 2' }];
      cadastroServiceSpy.obterTime.and.returnValue(of(mockTimes));

      component.loadTimes();

      expect(cadastroServiceSpy.obterTime).toHaveBeenCalled();
      expect(component.times).toEqual(mockTimes);
    });

    it('should log an error if there is an error while loading times', () => {
      const mockError = 'Test error';
      cadastroServiceSpy.obterTime.and.returnValue(throwError(mockError));

      spyOn(console, 'error');

      component.loadTimes();

      expect(cadastroServiceSpy.obterTime).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Erro ao carregar times:', mockError);
    });
  });

  describe('createUser', () => {
    it('should call createUser method of cadastroService with the user form value', () => {
      const mockUser = {
        timeId: 1,
        nome: 'John Doe',
        cpf: '123456789',
        email: 'john.doe@example.com',
        status: true
      };

      component.usuarioForm.setValue(mockUser);
      cadastroServiceSpy.criarUsuario.and.returnValue(of(null));

      component.createUser();

      expect(cadastroServiceSpy.criarUsuario).toHaveBeenCalledWith(mockUser);
    });

    it('should log an error if there is an error while creating the user', () => {
      const mockError = 'Test error';
      cadastroServiceSpy.criarUsuario.and.returnValue(throwError(mockError));

      spyOn(console, 'error');
      component.usuarioForm.setValue({});

      component.createUser();

      expect(cadastroServiceSpy.criarUsuario).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Erro ao criar usuário:', mockError);
    });

    it('should reset the form if user creation is successful', () => {
      const mockUser = {
        timeId: 1,
        nome: 'John Doe',
        cpf: '123456789',
        email: 'john.doe@example.com',
        status: true
      };

      component.usuarioForm.setValue(mockUser);
      cadastroServiceSpy.criarUsuario.and.returnValue(of(null));

      spyOn(component.usuarioForm, 'reset');

      component.createUser();

      expect(cadastroServiceSpy.criarUsuario).toHaveBeenCalled();
      expect(component.usuarioForm.reset).toHaveBeenCalled();
    });

    it('should not reset the form if the form is invalid', () => {
      spyOn(component.usuarioForm, 'reset');

      component.createUser();

      expect(cadastroServiceSpy.criarUsuario).not.toHaveBeenCalled();
      expect(component.usuarioForm.reset).not.toHaveBeenCalled();
    });
  });
});
