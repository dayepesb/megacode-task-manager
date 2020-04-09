import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrincipalPageComponent } from './footer-principal-page.component';

describe('FooterPrincipalPageComponent', () => {
  let component: FooterPrincipalPageComponent;
  let fixture: ComponentFixture<FooterPrincipalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPrincipalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPrincipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
