import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
  // employeeList:any = [];
  // constructor(private route: Router,private employeeSevice:EmployeeService) { }

  // ngOnInit()
  // {
  //   this.List();
  // }

  // List()
  // {
  //   this.employeeSevice.List().subscribe(res=>{
  //     console.log(res);
  //   });
  // }

  // addRecord() {
  //   this.route.navigateByUrl('add-employee')
  // }
}
