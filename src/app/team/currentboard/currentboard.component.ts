import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-currentboard',
  templateUrl: './currentboard.component.html',
  styleUrls: ['./currentboard.component.css']
})
export class CurrentboardComponent implements OnInit {

  constructor(private headerService : HeaderService) {
    this.headerService.title.next('Current Board')
   }

  ngOnInit(): void {
  }

}
