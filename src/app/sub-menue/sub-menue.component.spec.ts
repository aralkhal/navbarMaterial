import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenueComponent } from './sub-menue.component';

describe('SubMenueComponent', () => {
  let component: SubMenueComponent;
  let fixture: ComponentFixture<SubMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
