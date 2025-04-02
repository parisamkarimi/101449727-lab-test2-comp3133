import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'missions', component: MissionListComponent },
  { path: 'mission/:id', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
