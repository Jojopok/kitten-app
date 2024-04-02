import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { Cat } from './models/cat.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  kittensList: Cat[] = [];
  userKittens: Cat[] = [];

  addKittenToList(kitten: Cat): void {
    this.kittensList.push(kitten);
  }

  onKittenAdopted(adoptKitten: Cat): void {
    this.userKittens.push(adoptKitten);
    this.kittensList = this.kittensList.filter(k => k !== adoptKitten);
  }
}
