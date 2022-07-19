import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HospitalMgmtComponent } from './components/hospital-mgmt/hospital-mgmt.component';

const BASE_URL="http://localhost:3000/hospital"

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  name: any;
  city: any;
  bedno: any;

  createHospital(HospitalTypesForm: {name:string,city:string,bedno:number}
    )
    {
      return this.http.post(BASE_URL, HospitalTypesForm)
    }
getUsers() {
  return this.http.get(BASE_URL);
}

deleteUser(hospital:any) {
  return this.http.delete(BASE_URL);
}

  constructor(public http : HttpClient) {}
}
