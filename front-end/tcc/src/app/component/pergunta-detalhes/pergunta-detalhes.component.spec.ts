import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaDetalhesComponent } from './pergunta-detalhes.component';

describe('PerguntaDetalhesComponent', () => {
  let component: PerguntaDetalhesComponent;
  let fixture: ComponentFixture<PerguntaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
