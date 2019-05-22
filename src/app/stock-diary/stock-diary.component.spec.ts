import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDiaryComponent } from './stock-diary.component';

describe('StockDiaryComponent', () => {
  let component: StockDiaryComponent;
  let fixture: ComponentFixture<StockDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
