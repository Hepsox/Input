import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponentComponent } from './skill-component.component';

describe('SkillComponentComponent', () => {
  let component: SkillComponentComponent;
  let fixture: ComponentFixture<SkillComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
