import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { OurTeamComponent } from './component/our-team/our-team.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
    },


    {
    path:'about',
    component: AboutComponent
    },
    
    {
     path:'team',
     component: OurTeamComponent
    },
    {
      path:'contact',
      component: ContactComponent
     } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
