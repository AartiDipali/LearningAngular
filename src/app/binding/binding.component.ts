import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
  hinndenProp:boolean=false;
  ngOnInit(): void {
    

  }
  // This is Component property
   source="/assets/images.jpg";
   dynAltTitle="this is shopping image";
   inStock:boolean=false;
   SetValuetodiv:string="";
   showFirstDiv:boolean=true;
   defaultchecked:boolean=true;
   
   ShowDiv()
   {
      this.showFirstDiv=false;
   }
   SetValue(event:any)
   {
    console.log(event);
      this.SetValuetodiv=event.target.value;
   }

   twowayName:string="Vrushab";
   isChecked:boolean=true;
   isradioButton:string="Male";

   @ViewChild('dobInput') dobInputProperty!: ElementRef;
   @ViewChild('ageInput') dobAgeProperty!: ElementRef;
   CalculateAge()
   {
    let birthYear=new Date(this.dobInputProperty.nativeElement.value).getFullYear();
    let currentyear = new Date().getFullYear();
    
    let calculativeAge=currentyear-birthYear;
  this.dobAgeProperty.nativeElement.value=calculativeAge;
   }

}
