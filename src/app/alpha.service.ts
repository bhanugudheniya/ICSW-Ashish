import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphaService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(name,subject,phone,email,message) {
      const obj = {name,subject,phone,email,message};
      this
          .http
          .post(`${this.url}/add`, obj)
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
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(name,subject, phone,email,message, id) {

      const obj = {
          name: name,
          subject: subject,
          phone: phone,
          email: email,
          message:message
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
