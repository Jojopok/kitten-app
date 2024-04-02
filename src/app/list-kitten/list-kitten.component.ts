import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../models/cat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

  @Input() kittens: Cat[] = [];
  @Output() kittenAdopted = new EventEmitter<Cat>();

  adoptKitten(kitten: Cat): void {
    this.kittenAdopted.emit(kitten);
  }

}
