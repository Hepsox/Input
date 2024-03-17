import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponentComponent } from './developer-component/developer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Input';
}
