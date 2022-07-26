import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HospitalMgmtComponent } from './components/hospital-mgmt/hospital-mgmt.component';
import { PatientComponent } from './components/patient/patient.component';
import { EllipsisPipe } from './ellipsis.pipe';
import { UseDirectiveComponent } from './components/use-directive/use-directive.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    AddProductComponent,
    NavbarComponent,
    HospitalMgmtComponent,
    PatientComponent,
    EllipsisPipe,
    UseDirectiveComponent,
    HighlightDirective
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
