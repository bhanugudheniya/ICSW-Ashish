import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = 'http://localhost:3000/job';
  constructor(private http: HttpClient) { }
  addJobData(eName,eAddress,eCountry,eState,eEmail,ePhone,hSchool,hDegree,hDegreeStatus,hArea,hCountry,wEmployer,wJobTitle,wStarting,wState,wCountry) {
      const obj = {eName,eAddress,eCountry,eState,eEmail,ePhone,hSchool,hDegree,hDegreeStatus,hArea,hCountry,wEmployer,wJobTitle,wStarting,wState,wCountry};
      this
          .http
          .post(`${this.url}/jobadd`, obj)
          .subscribe(res => console.log(res));
          console.log("working")
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
//   upData(id, name) {
//       const obj = { name };
//       this
//           .http
//           .post(`${this.url}/update/${id}`, obj)
//           .subscribe(res => console.log(res));
//   }
//   delData(id) {
//       return this.http.get(`${this.url}/delete/${id}`).subscribe();
//   }
//   editData(id) {
//     return this
//             .http
//             .get(`${this.url}/edit/${id}`);
//     }


//     up_data(name,subject, phone,email,message, id) {

//       const obj = {
//           name: name,
//           subject: subject,
//           phone: phone,
//           email: email,
//           message:message
//         };
//       this
//         .http
//         .post(`${this.url}/update/${id}`, obj)
//         .subscribe(res => console.log('Done'));
//     }
 }
