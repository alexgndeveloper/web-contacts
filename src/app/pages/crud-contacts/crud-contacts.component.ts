import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-contacts',
  templateUrl: './crud-contacts.component.html',
  styleUrls: ['./crud-contacts.component.scss']
})
export class CrudContactsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: '',
      phone: '',
      cellphone: ['', Validators.required],
      email: '',
      address: this.formBuilder.array([])
    });
  }

  get lessons() {
    return this.formGroup.controls['address'] as FormArray;
  }

  public addLesson(): void {

  }

}
