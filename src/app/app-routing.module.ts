import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MasterComponent } from './core/component/master/master.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HowtojionusComponent } from './howtojionus/howtojionus.component';

const routes: Routes = [
  {
    path: "", component: MasterComponent, children: [
      {path: "", redirectTo:'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'aboutus', component: AboutusComponent },
      { path: 'howtojoin', component: HowtojionusComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
