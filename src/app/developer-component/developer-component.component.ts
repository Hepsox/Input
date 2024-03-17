import { Component } from '@angular/core';
import { Developper } from '../models/ developer.model';
import { SkillComponentComponent } from '../skill-component/skill-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developer-component',
  standalone: true,
  imports: [SkillComponentComponent, CommonModule],
  templateUrl: './developer-component.component.html',
  styleUrl: './developer-component.component.css',
})
export class DeveloperComponentComponent {
  newDevelopper: Developper = {
    lastName: 'Delaire',
    firstName: 'Marie',
    age: 20,
    gender: 'Femme',
    bio: 'dede',
    skills: [
      {
        name: 'html',
        logo: 'logohml',
        site: 'sitehtml',
      },
      {
        name: 'css',
        logo: 'logocss',
        site: 'sitecss',
      },
    ],
  };
}
