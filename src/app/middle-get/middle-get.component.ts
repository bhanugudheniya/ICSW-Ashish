import { Component, OnInit } from '@angular/core';
import { AlphaService } from '../alpha.service';
@Component({
  selector: 'app-middle-get',
  templateUrl: './middle-get.component.html',
  styleUrls: ['./middle-get.component.css']
})
export class MiddleGetComponent implements OnInit {
  arr;
  // name;
  constructor(private us: AlphaService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
delData(id) {
  this.us.delData(id);
}

}
