import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit
 {
  moviesArr!: any[];
  constructor() {
    this.moviesArr = [
      {
        "id": 1,
        "title": "Super Man"
      },
      {
        "id": 2,
        "title": "Spider Man"
      },
      {
        "id": 3,
        "title": "Aladdin"
      }, 
      {
        "id": 4,
        "title": "Downton Abbey"
      }
    ];
    
   }

  ngOnInit(): void {
  }
   Users:string[]=[];

GetUser(uname:any)
{
  this.Users.push(uname.value)
}
Remove(item:any)
{
  this.Users.splice(item,1);
}

// Track by  
LoadMoreDataTrackBy(index:number,mID:number):number
{
  return index;
}


LoadMoreData()
{
  this.moviesArr = [
    {
      "id": 1,
      "title": "Super Man"
    },
    {
      "id": 2,
      "title": "Spider Man"
    },
    {
      "id": 3,
      "title": "Aladdin"
    }, 
    {
      "id": 4,
      "title": "Downton Abbey"
    },
    {
      "id": 5,
      "title": "Abbey"
    },
    {
      "id": 6,
      "title": "Abbey def"
    }
  ];
  
}
//Ng-switch
people: any[] = [
  {
    name: "Douglas  Pace",
    age: 35,
    country: 'MARS'
  },
  {
    name: "Mcleod  Mueller",
    age: 32,
    country: 'USA'
  },
  {
    name: "Day  Meyers",
    age: 21,
    country: 'HK'
  },
  {
    name: "Aguirre  Ellis",
    age: 34,
    country: 'IND'
  }
]

SuperPower:string='abc';


//Attribute directive

//1.[ngClass]
styles={
  'color':'red',
  'background-color':'gray'
}
employee:any={
  id:1,
  name:"aa",
  active:true,
  priority:'high'
}
ClassExp={
  'red':this.employee===true,
  'green':this.employee===false,
}
ngclassExample:any={};

//1.[ngClass]

ngstyleExample:any={};

}
