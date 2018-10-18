import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectTokenTestComponent } from './inject-token-test.component';

describe('InjectTokenTestComponent', () => {
  let component: InjectTokenTestComponent;
  let fixture: ComponentFixture<InjectTokenTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectTokenTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectTokenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
