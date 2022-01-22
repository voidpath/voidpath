import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElButtonComponent } from './el-button.component';

describe('ElButtonComponent', () => {
  let component: ElButtonComponent;
  let fixture: ComponentFixture<ElButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
