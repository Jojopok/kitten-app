import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../models/cat.model';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {

  constructor(private formBuilder: FormBuilder) { }

  @Output() newKitten: EventEmitter<Cat> = new EventEmitter();

  taskForm = this.formBuilder.group({
    name: ['', Validators.required],
    breed: ['', Validators.required],
    birthDate: ['', Validators.required],
    imageUrl: ['', Validators.required]
  });

  sendTaskToApp() {
    if (this.taskForm.valid) {
    this.newKitten.emit(this.taskForm.value as Cat);
  } else {
    console.log('Le formulaire n\'est pas valide');
  }

  }
}
