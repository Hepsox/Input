import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill-component',
  standalone: true,
  imports: [],
  templateUrl: './skill-component.component.html',
  styleUrl: './skill-component.component.css',
})
export class SkillComponentComponent {
  @Input()
  skill: Skill = { name: '', logo: '', site: '' };
}
