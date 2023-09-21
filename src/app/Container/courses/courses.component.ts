import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 Courses:any=[
      {id:1,name:'Angular',price:'20000',image:'/assets/Courses/Angimages.jpg',type:'Free'},
      {id:2,name:'React',price:'40000',image:'/assets/Courses/react.jpg',type:'Free'},
      {id:3,name:'javascript',price:'40000',image:'/assets/Courses/JSimages.png',type:'Premium'},
      {id:4,name:'.Net Core',price:'30000',image:'/assets/Courses/DotNet.jpg',type:'All'},
      
  ]

  GetAllCourses()
  {
    return this.Courses.length;
  }
  GetFreeCourse()
  {
    return this.Courses.filter((course:any)=>course.type==='Free').length;
  }
  GetPremiumCourse()
  {
    return this.Courses.filter((course:any)=>course.type==='Premium').length;
  }

  courseCountRadioButton:string='All';

  OnRadioSelectionChange(data:any)
  {
    this.courseCountRadioButton=data;
    console.log(this.courseCountRadioButton);
  }

  searchText:string='';

  OnSearchTextEnetred(data:string)
  {
     this.searchText=data;
     console.log(this.searchText);
  }

}
