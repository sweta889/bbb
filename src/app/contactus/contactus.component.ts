import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  constructor(private headerService : HeaderService) {
    this.headerService.title.next('CONTACT US')
   }

  ngOnInit(): void {
  }

}
