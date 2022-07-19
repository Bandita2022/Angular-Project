import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductTypesForm : FormGroup;

  contactForm = new FormGroup({
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    gender : new FormControl(),
    isMarried : new FormControl(),
    country : new FormControl()
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }

  product = {
    ProductName: "Samsung Galaxy s22",
    color: "Pearl white",
    price: "999",
    launchedon: Date.now(),
    ProductID: "ABCD"

  }
  constructor() { }

  ngOnInit(): void {
    //this.addProductTypesForm = new FormGroup({
    //  'productName' : new FormControl(),
     // 'productDescription' : new FormControl()
   // })
  }

  //addProductType() {
   // console.log(this.addProductTypesForm.value)
 // }
}
