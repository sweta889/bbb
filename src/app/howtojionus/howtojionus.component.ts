import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-howtojionus',
  templateUrl: './howtojionus.component.html',
  styleUrls: ['./howtojionus.component.css']
})
export class HowtojionusComponent implements OnInit {

  public joinForm : FormGroup;

  constructor(private headerService : HeaderService) {

    this.headerService.title.next('HOW TO JOIN US')

    this.joinForm = new FormGroup({
     name : new FormControl(),
     email : new FormControl(),
     mobile : new FormControl(),
     profession : new FormControl(),
     company : new FormControl(),
      area : new FormControl(),
      privacyCheckbox : new FormControl()
    })
   }

  ngOnInit(): void {
  }

  

}
