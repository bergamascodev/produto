import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CadastroService } from '../../app/services/cadastro.service';

describe('CadastroService', () => {
  let service: CadastroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CadastroService]
    });
    service = TestBed.inject(CadastroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('criarCategoria', () => {
    it('should send a POST request to create a new category', () => {
      const mockCategoria = { nome: 'Category 1' };
      const mockResponse = { id: 1, nome: 'Category 1' };

      service.criarCategoria(mockCategoria).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/categoria`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('obterCategoria', () => {
    it('should send a GET request to retrieve a category', () => {
      const categoryId = 1;
      const mockResponse = { id: categoryId, nome: 'Category 1' };

      service.obterCategoria(categoryId).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/categoria/${categoryId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('atualizarCategoria', () => {
    it('should send a PUT request to update a category', () => {
      const categoryId = 1;
      const mockCategoria = { id: categoryId, nome: 'Updated Category 1' };
      const mockResponse = { id: categoryId, nome: 'Updated Category 1' };

      service.atualizarCategoria(categoryId, mockCategoria).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/categoria/${categoryId}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockResponse);
    });
  });

  describe('criarPergunta', () => {
    it('should send a POST request to create a new question', () => {
      const mockPergunta = { texto: 'Question 1' };
      const mockResponse = { id: 1, texto: 'Question 1' };

      service.criarPergunta(mockPergunta).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/pergunta`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('obterPergunta', () => {
    it('should send a GET request to retrieve a question', () => {
      const perguntaId = 1;
      const mockResponse = { id: perguntaId, texto: 'Question 1' };

      service.obterPergunta(perguntaId).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/pergunta/${perguntaId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('atualizarPergunta', () => {
    it('should send a PUT request to update a question', () => {
      const perguntaId = 1;
      const mockPergunta = { id: perguntaId, texto: 'Updated Question 1' };
      const mockResponse = { id: perguntaId, texto: 'Updated Question 1' };

      service.atualizarPergunta(perguntaId, mockPergunta).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/pergunta/${perguntaId}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockResponse);
    });
  });

  describe('criarTime', () => {
    it('should send a POST request to create a new team', () => {
      const mockTime = { nome: 'Team 1' };
      const mockResponse = { id: 1, nome: 'Team 1' };

      service.criarTime(mockTime).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/time`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('obterTime', () => {
    it('should send a GET request to retrieve a team', () => {
      const timeId = 1;
      const mockResponse = { id: timeId, nome: 'Team 1' };

      service.obterTime(timeId).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/time/${timeId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('atualizarTime', () => {
    it('should send a PUT request to update a team', () => {
      const timeId = 1;
      const mockTime = { id: timeId, nome: 'Updated Team 1' };
      const mockResponse = { id: timeId, nome: 'Updated Team 1' };

      service.atualizarTime(timeId, mockTime).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/time/${timeId}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockResponse);
    });
  });

  describe('criarUsuario', () => {
    it('should send a POST request to create a new user', () => {
      const mockUsuario = { nome: 'User 1' };
      const mockResponse = { id: 1, nome: 'User 1' };

      service.criarUsuario(mockUsuario).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/usuario`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('obterUsuario', () => {
    it('should send a GET request to retrieve a user', () => {
      const usuarioId = 1;
      const mockResponse = { id: usuarioId, nome: 'User 1' };

      service.obterUsuario(usuarioId).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/usuario/${usuarioId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('atualizarUsuario', () => {
    it('should send a PUT request to update a user', () => {
      const usuarioId = 1;
      const mockUsuario = { id: usuarioId, nome: 'Updated User 1' };
      const mockResponse = { id: usuarioId, nome: 'Updated User 1' };

      service.atualizarUsuario(usuarioId, mockUsuario).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/usuario/${usuarioId}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockResponse);
    });
  });

  describe('atualizarStatusUsuario', () => {
    it('should send a PUT request to update the status of a user', () => {
      const usuarioId = 1;
      const status = true;
      const mockResponse = { id: usuarioId, status: true };

      service.atualizarStatusUsuario(usuarioId, status).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/usuario/${usuarioId}/change-status`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockResponse);
    });
  });
});
