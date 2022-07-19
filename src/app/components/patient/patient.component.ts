import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  PatientTypesForm : FormGroup;

  contactForm = new FormGroup({
    Patientname : new FormControl(),
    City : new FormControl(),
    Age : new FormControl(),
    Disease : new FormControl()
     })

     onSubmit() {
      console.log(this.contactForm.value);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
