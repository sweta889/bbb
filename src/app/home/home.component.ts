import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'businessBuddies';
  public bannerImageList = [
    {
      id : '1',
      src : 'meeting1.jpg'
    },
    {
      id : '2',
      src : 'meeting2.jpg'
    },
    {
      id : '3',
      src : 'meeting3.jpg'
    },
    
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  currentImage : number = 0;

  @HostListener('windowscroll', ['event']) onscroll() {
    console.log('scrolling')
    if (window.scrollY > 100) {
      document.getElementById('headerId')?.classList.add('shrink')
    }
  }
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.title.next(null)
  }


  ngOnInit(): void {

  }

  public prevImage(){
    if(this.currentImage-1 > -1){
      this.currentImage -= 1;
    }
    else{
      this.currentImage = this.bannerImageList.length - 1;
    }
  }

  public nextImage(){
    if(this.currentImage+1 < this.bannerImageList.length){
      this.currentImage += 1;
    }
    else{
      this.currentImage = 0;
    }
  }
}
