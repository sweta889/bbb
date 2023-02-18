import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentboardComponent } from './currentboard/currentboard.component';
import { PromotersComponent } from './promoters/promoters.component';
import { TeamComponent } from './team.component';

const routes: Routes = [
  {
    path: "", component: TeamComponent, children: [
        {path:"promoters", component: PromotersComponent},
        {path:"currentboard", component: CurrentboardComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
