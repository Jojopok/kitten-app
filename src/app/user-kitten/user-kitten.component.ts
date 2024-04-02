import { Component, Input } from '@angular/core';
import { Cat } from '../models/cat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {

  @Input() userKittens: Cat[] = [];

}
