import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDetalhesComponent } from './time-detalhes.component';

describe('TimeDetalhesComponent', () => {
  let component: TimeDetalhesComponent;
  let fixture: ComponentFixture<TimeDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
