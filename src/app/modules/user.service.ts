import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    login: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, , Validators.email]),
    gender: new FormControl(1),
    country: new FormControl(''),
    status: new FormControl(true),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      login: '',
      fullName: '',
      email: '',
      gender: 1,
      country: '',
      status: true
    })
  }
}
