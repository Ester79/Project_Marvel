import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views/Components
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'}, // First view to display when load the application
  {path: 'main', component: MainComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail', component: DetailsComponent},
  {path: 'team', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
