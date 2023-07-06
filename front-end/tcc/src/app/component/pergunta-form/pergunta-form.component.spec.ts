import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaFormComponent } from './pergunta-form.component';

describe('PerguntaFormComponent', () => {
  let component: PerguntaFormComponent;
  let fixture: ComponentFixture<PerguntaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
