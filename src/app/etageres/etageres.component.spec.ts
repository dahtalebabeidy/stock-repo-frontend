import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtageresComponent } from './etageres.component';

describe('EtageresComponent', () => {
  let component: EtageresComponent;
  let fixture: ComponentFixture<EtageresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtageresComponent]
    });
    fixture = TestBed.createComponent(EtageresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
