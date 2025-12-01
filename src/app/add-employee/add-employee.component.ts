import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  {
  // employeeForm!: FormGroup;
  // isActive:boolean=false;
  // isDepartment:boolean=true;
  // genders:any=['male','female'];
  // departmentList: any = ['Developer','Finance','HR','Manager'];
  // reportingToList: any;
  // //  = [
  // //   {departmentName:'Developer', ReportingTo:'Test1'},
  // //   {departmentName:'Finance' ,ReportingTo:'Test2'},
  // //   {departmentName:'HR' ,ReportingTo:'Test3'},
  // //   {departmentName:'Manager' ,ReportingTo:'Test4'}
  // // ];
  // constructor(private employeeService: EmployeeService, private route: Router, private fb: FormBuilder) {
  //   this.employeeForm = this.fb.group({
  //     FirstName: new FormControl('', Validators.required),
  //     LastName: new FormControl('', Validators.required),
  //     Email: new FormControl('', [Validators.required,Validators.email]),
  //     Gender: new FormControl('', Validators.required),
  //     ContactNumber: new FormControl('', Validators.required),
  //     Department: new FormControl('', Validators.required),
  //     ReportingTo: new FormControl('', Validators.required),
  //     Status: new FormControl('', Validators.required),
  //   })
  // }

  // ngOnInit() {

  // }
  // employeeStatus()
  // {
  //   this.isActive =true
  // }
  // selectDepartment(dept:any)
  // {
  //   debugger
  //   // this.employeeForm['controls']['Department'].setValue(dept.value);
  //   let selectedDepartment = dept.target.value
  //   this.isDepartment=true
  //   this.reportingToList = [
  //   {departmentName:'Developer', ReportingTo:'Test1'},
  //   {departmentName:'Finance' ,ReportingTo:'Test2'},
  //   {departmentName:'HR' ,ReportingTo:'Test3'},
  //   {departmentName:'Manager' ,ReportingTo:'Test4'}
  // ];
  //   this.reportingToList.filter((x:any)=>x.departmentName==selectedDepartment);
    
  // }
  // save() {
  //   debugger
  //   if (this.employeeForm.valid) {
  //     const obj = {}
  //     this.employeeService.Create(obj).subscribe(res => {
  //       console.log(res);
  //       this.route.navigateByUrl('/')
  //     })
  //   }
  // }

}
