import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ContentModule } from './content/content.module';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { OurTeamComponent } from './component/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    OurTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
