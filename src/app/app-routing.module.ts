import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CareerComponent } from './career/career.component';
import { VaptComponent } from './vapt/vapt.component';
import { WebComponent } from './web/web.component';
import { NetworkComponent } from './network/network.component';
import { MiddleComponent } from './middle/middle.component';
import { ContactComponent } from './contact/contact.component';
import { MobileComponent } from './mobile/mobile.component';
import { RedComponent } from './red/red.component';
import { RiskComponent } from './risk/risk.component';
import { MiddleGetComponent } from './middle-get/middle-get.component';
import { UpdateComponent } from './update/update.component';
// import { ContactGetComponent } from './contact-get/contact-get.component';
import { ExpertComponent } from './expert/expert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobformComponent } from './jobform/jobform.component';
import { JobadminComponent } from './jobadmin/jobadmin.component';

const routes: Routes = [
  {path: '', component: MiddleComponent},
  {path: 'home', component: HomeComponent},
  {path: 'team', component: TeamComponent},
  {path: 'career', component: CareerComponent},
  {path: 'vapt', component: VaptComponent},
  {path: 'web', component: WebComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'red', component: RedComponent},
  {path: 'risk', component: RiskComponent},
  {path: 'update/:id', component: UpdateComponent},
  // {path:'contact-get' ,component:ContactGetComponent},
  {path:'middle-get' ,component:MiddleGetComponent},
  {path: 'expert', component:ExpertComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path : 'jobform', component:JobformComponent},
  {path: 'jobadmin', component:JobadminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
