import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SetValuetodiv:string="";
  SetValue(event:any)
   {
    console.log(event);
      this.SetValuetodiv=event.target.value;
   }

   setSearchText:string='';
   @Output() datasendtoparentEvent:EventEmitter<string>=new EventEmitter<string>;

   inputTrackerChild()
   {
      this.datasendtoparentEvent.emit(this.setSearchText);
   }
}
