import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Hello from Angular!!</p>

    <button (click)="toggle()">Toggle</button>
    
    <p *ngIf="show">Toggled</p>
  `,
})
export class HelloComponent {
  show = true;

  toggle() {
    this.show = !this.show;
  }
}