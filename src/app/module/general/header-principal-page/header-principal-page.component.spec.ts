import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrincipalPageComponent } from './header-principal-page.component';

describe('HeaderPrincipalPageComponent', () => {
  let component: HeaderPrincipalPageComponent;
  let fixture: ComponentFixture<HeaderPrincipalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPrincipalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrincipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
