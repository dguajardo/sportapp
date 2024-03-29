import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'piano';
  handleSound(id: number) {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + id + '.wav';
    audio.load();
    audio.play();

  }
}
