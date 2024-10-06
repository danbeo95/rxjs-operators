import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlattenOperatorComponent } from './flatten-operator.component';

describe('FlattenOperatorComponent', () => {
  let component: FlattenOperatorComponent;
  let fixture: ComponentFixture<FlattenOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlattenOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlattenOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
