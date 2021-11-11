import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class HelloComponent {
  @Input() name: string;
  constructor(private formBuilder: FormBuilder) {}
  // @Input() name: string;
  userForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.userForm);
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      pinCode: ['', Validators.required],
      symptoms: [[]],
      travelHistory: ['', Validators.required],
      contactWithCovidPatient: ['', Validators.required],
    });
  }

  Submit() {
    debugger;
    let userDetails = this.userForm.value;
    let symptomsArray;
    if (userDetails.symptoms.length != 0) {
      symptomsArray = userDetails.symptoms.split(',');
    } else {
      symptomsArray = [];
    }
    if (
      symptomsArray.length == 0 &&
      userDetails.travelHistory.toLowerCase() == 'yes' &&
      userDetails.contactWithCovidPatient.toLowerCase() == 'no'
    ) {
      alert('Risk percentage is 5%');
    } else if (
      symptomsArray.length == 1 &&
      (userDetails.travelHistory.toLowerCase() == 'yes' ||
        userDetails.contactWithCovidPatient.toLowerCase() == 'no')
    ) {
      alert('Risk percentage is 50%');
    } else if (
      symptomsArray.length == 2 &&
      (userDetails.travelHistory.toLowerCase() == 'yes' ||
        userDetails.contactWithCovidPatient.toLowerCase() == 'no')
    ) {
      alert('Risk percentage is 75%');
    } else if (
      symptomsArray.length > 2 &&
      (userDetails.travelHistory.toLowerCase() == 'yes' ||
        userDetails.contactWithCovidPatient.toLowerCase() == 'no')
    ) {
      alert('Risk percentage is 75%');
    }
    console.log(this.userForm.value);
  }
}
