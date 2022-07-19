import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './component/user-form/user-form.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HospitalMgmtComponent } from './components/hospital-mgmt/hospital-mgmt.component';
import { PatientComponent } from './components/patient/patient.component';
import { UseDirectiveComponent } from './components/use-directive/use-directive.component';

const routes: Routes = [
  {path:"register",component:UserFormComponent },{path: "product",component:AddProductComponent },
  {path : "Hospital",component:HospitalMgmtComponent}, {path: "Patient", component:PatientComponent},
  {path : "Directive",component:UseDirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
