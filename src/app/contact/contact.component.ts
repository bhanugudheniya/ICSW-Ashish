import { Component, OnInit } from '@angular/core';
import {AlphaService} from '../alpha.service';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent implements OnInit {
    name;
    subject;
    phone;
    email;
    message;

  constructor(private us: AlphaService) { }

  ngOnInit() {
  }

  addData(){
      this.us.addData(this.name, this.subject, this.phone, this.email, this.message);
      console.log(this.name)
  }

}

