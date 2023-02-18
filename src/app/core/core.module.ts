import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { MasterComponent } from './component/master/master.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderService } from './services/header.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MasterComponent
  ],
  providers : [
    HeaderService
  ]
})
export class CoreModule { }
