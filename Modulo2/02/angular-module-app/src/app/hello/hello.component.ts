import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() buttonLabel: string = '';

  num: number = 0;

  getAlert() {
    alert('Olá');
  }

  addToNum(x: number) {
    this.num += x;
  }
}
