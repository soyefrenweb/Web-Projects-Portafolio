import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModelComponent } from './test-model.component';

describe('TestModelComponent', () => {
  let component: TestModelComponent;
  let fixture: ComponentFixture<TestModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestModelComponent]
    });
    fixture = TestBed.createComponent(TestModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
