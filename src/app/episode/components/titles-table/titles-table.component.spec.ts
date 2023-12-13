import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesTableComponent } from './titles-table.component';

describe('TitlesTableComponent', () => {
  let component: TitlesTableComponent;
  let fixture: ComponentFixture<TitlesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitlesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
