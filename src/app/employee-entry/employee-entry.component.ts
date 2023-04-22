import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {
  employeeCode=""
  employeeName=""
  designation=""

  constructor(private api : ApiService)
  {

  }

  data:any = []

  readValues=()=>
  {
    this.data = {"employeeCode":this.employeeCode,"employeeName":this.employeeName,"designation":this.designation}
    console.log(this.data)

    this.api.addEmployee(this.data).subscribe(
      (response:any)=>
      {
         if(response.status == "success")
         {
          alert("added successfully")
         }
         else
         {
          alert("not added")
         }
      }
    )
  }
}
