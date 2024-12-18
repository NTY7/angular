import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css'] ,
  standalone: true,
  imports: [NgFor]
})
export class BoutonsComponent {
  items: { id: number, status: string }[] = [];
  nextId = 1;

  addItem(status: string) {
    if (this.items.length < 1000) {
      this.items.push({ id: this.nextId++, status });
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
