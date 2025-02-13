import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnowledgeComponent } from './hnowledge.component';

describe('HnowledgeComponent', () => {
  let component: HnowledgeComponent;
  let fixture: ComponentFixture<HnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
