import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TeamComponent } from "./team.component";
import { PromotersComponent } from './promoters/promoters.component';
import { CurrentboardComponent } from './currentboard/currentboard.component';
import { TeamRoutingModule } from "./team-routing.module";

@NgModule({
    declarations: [
        TeamComponent,
        PromotersComponent,
        CurrentboardComponent
    ],
    imports: [
        CommonModule,
        TeamRoutingModule
    ],
    providers: [],
})
export class TeamModule { }
