import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CareerComponent } from './career/career.component';
import { VaptComponent } from './vapt/vapt.component';
import { WebComponent } from './web/web.component';
import { NetworkComponent } from './network/network.component';
import { ContactComponent } from './contact/contact.component';
import { MobileComponent } from './mobile/mobile.component';
import { RedTeamComponent } from './red-team/red-team.component';
import { RedComponent } from './red/red.component';
import { RiskComponent } from './risk/risk.component';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
// import { ContactGetComponent } from './contact-get/contact-get.component';
// import { UpdateComponent } from './update/update.component';
import { MiddleGetComponent } from './middle-get/middle-get.component';
import { ExpertComponent } from './expert/expert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobformComponent } from './jobform/jobform.component';
import { JobadminComponent } from './jobadmin/jobadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    CareerComponent,
    VaptComponent,
    WebComponent,
    NetworkComponent,
    ContactComponent,
    MobileComponent,
    RedTeamComponent,
    RedComponent,
    RiskComponent,
    UpdateComponent,
    // ContactGetComponent,
    MiddleGetComponent,
    ExpertComponent,
    LoginComponent,
    RegisterComponent,
    JobformComponent,
    JobadminComponent
    // MiddleGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
