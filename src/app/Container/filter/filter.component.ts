import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() all:number=1;
  @Input() free:number=2;
  @Input() premium:number=1;

  selectedRadioButtonValue:string='All';



  @Output() filtereventradioselectionChange:EventEmitter<string>=new EventEmitter<string>;

  OnRadioSelectionChange()
  {
    this.filtereventradioselectionChange.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }
}
