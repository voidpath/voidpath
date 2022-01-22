import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElInputComponent } from './el-input.component';

describe('ElInputComponent', () => {
  let component: ElInputComponent;
  let fixture: ComponentFixture<ElInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
