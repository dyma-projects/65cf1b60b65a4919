import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerice4Component } from './exerice4.component';

describe('Exerice4Component', () => {
  let component: Exerice4Component;
  let fixture: ComponentFixture<Exerice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exerice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exerice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
