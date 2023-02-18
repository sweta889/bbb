import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  
})
export class GalleryComponent implements OnInit {

  public ImageList : string[] = [
    'meeting.jpg',
    'meeting1.jpg',
    'meeting2.jpg',
    'meeting3.jpg',
    'meeting4.jpg',
    'meeting5.jpeg',
    'meeting6.jpg'
  ];

  constructor(private headerService : HeaderService) {
    this.headerService.title.next('GALLERY')
   }

  ngOnInit(): void {
  }

}
