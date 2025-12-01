import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get('https://localhost:7240/api/Employee/List')
  }

  GetById() {
    return this.http.get('https://localhost:7240/api/Employee/GetById')
  }

  Create(data:any) {
    return this.http.post('https://localhost:7240/api/Employee/Create',data)
  }

//   {
//   "id": 1,
//   "name": "Suraj",
//   "department": "developer",
//   "email": "suraj@test.com",
//   "phone": "9900990099",
//   "gender": "male",
//   "reportingTo": "test1",
//   "status": true
// }

  Update(data:any) {
    return this.http.put('https://localhost:7240/api/Employee/Update',data)
  }

  Delete(data:any) {
    return this.http.delete('https://localhost:7240/api/Employee/Delete',data)
  }
}
