import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl : './admin.component.html',
  styleUrls : ['./admin.component.css']
})
export class AdminComponent  {
  constructor(private formBuilder: FormBuilder) {}
  // @Input() name: string;
  adminForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.adminForm);
  }

  initializeForm() {
    this.adminForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      pinCode: ['', Validators.required]
    });
  }

  Submit(){
    console.log(this.adminForm.value); 
  }
}