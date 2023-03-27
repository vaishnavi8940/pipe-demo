import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  result:any;
  constructor(private commmon:CommonService){
    this.result = commmon.employees
  }
}
