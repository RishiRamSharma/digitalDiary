import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { validateHeaderName } from 'http';
import { first } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  uploadForm: FormGroup;
  list: any = [];
  constructor(private api: AppService) {
    this.uploadForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.getList();
  }
  public submit() {
    const firstName = this.uploadForm.value.firstName;
    const lastName = this.uploadForm.value.lastName;
    this.api.submitForm(firstName, lastName).subscribe((res: any) => {
      const response = res;
      console.log(response);
    }, (err: any) => {
      console.log(err);
    });

    this.getList();
    this.uploadForm.patchValue({
      firstName: '',
      lastName: ''
    });
  }
  public getList() {
    this.api.GetList().subscribe((res: any) => {
      this.list = res; console.log(this.list);
    }, (err: any) => {
      console.log(err);
    })
  }
}
