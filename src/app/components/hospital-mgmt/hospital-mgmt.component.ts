import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HospitalService } from 'src/app/hospital.service';
import Hospital from 'src/app/Entity/Hospital';


@Component({
  selector: 'app-hospital-mgmt',
  templateUrl: './hospital-mgmt.component.html',
  styleUrls: ['./hospital-mgmt.component.css']
})
export class HospitalMgmtComponent implements OnInit {
 
 
  HospitalTypesForm : FormGroup;

  contactForm = new FormGroup({
    name : new FormControl(),
    city : new FormControl(),
    bedno : new FormControl()
         })
  Hospital = new Hospital();
 
   

     onSubmit() {
      console.log(this.Hospital.name);
    console.log(this.Hospital.city);
    console.log(this.Hospital.bedno);
    // console.log(this.user.name);
    // console.log(this.user.city);
    const observable = this._HospitalService.createHospital(this.Hospital);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error: any) {
        console.log(error);
        alert('something went wrong, Please try again!');
      }
    );
      console.log(this.contactForm.value);
    }
  constructor(private _HospitalService: HospitalService) { }

  ngOnInit(): void {
  }

}