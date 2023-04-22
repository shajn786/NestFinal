import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

data:any = []

  constructor(private api : ApiService)
  {
    this.api.fetchEmployee().subscribe(
      (response:any)=>
      {
        this.data=response  
      }
    )
  }

}
