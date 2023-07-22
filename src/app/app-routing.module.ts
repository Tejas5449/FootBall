import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchInfoComponent } from './match-info/match-info.component';

const routes: Routes = [{component:HomeComponent,path:'date/:id'},
{component:MatchInfoComponent,path:'matchInfo/:id'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
