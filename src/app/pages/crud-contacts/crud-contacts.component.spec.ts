import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContactsComponent } from './crud-contacts.component';

describe('CrudContactsComponent', () => {
  let component: CrudContactsComponent;
  let fixture: ComponentFixture<CrudContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
