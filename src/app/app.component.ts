import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatCardModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clubhub';
  clubName: string = 'Chess Club';
  clubDescription: string = 'Learn and play chess with fellow enthusiasts'
  memberCount: number = 25;
  clubs = [
    {
      name: 'Chess Club',
      description: 'Learn and play chess with fellow enthusiasts!',
      memberCount: 25
    },
    {
      name: 'Book Club',
      description: 'Read and discuss great books together.',
      memberCount: 18
    },
    {
      name: 'Coding Club',
      description: 'Build amazing projects and learn programming.',
      memberCount: 32
    },
    {
      name: 'Art Club',
      description: 'Express your creativity through various art forms.',
      memberCount: 15
    }
  ];
}
