import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css']
})
export class PromotersComponent implements OnInit {

  public moreDetails : boolean = false;

  constructor(private headerService : HeaderService) { 
    this.headerService.title.next('PROMOTERS')
  }

  ngOnInit(): void {
    
  }

  public showMore(){
    this.moreDetails = !this.moreDetails;
  }

}
