import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title : string = null;
  public path : string = null;
  showSubmenu: boolean = false;

  constructor(private _headerService : HeaderService) { 
    this._headerService.title.subscribe( res => {
      this.title = res;
      if(this.title){
        document.getElementById('headerId')?.classList.add('show')
      }
      else{
        document.getElementById('headerId')?.classList.remove('show')
      }
    })
  }

  ngOnInit(): void {
  }

  public openSubmenu(){
    this.showSubmenu = true;
  }

  public closeSubmenu(){
    this.showSubmenu = false;
  }

}
