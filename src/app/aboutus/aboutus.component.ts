import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private headerService : HeaderService) { 
    this.headerService.title.next('ABOUT US')
  }

  ngOnInit(): void {
  }

}
