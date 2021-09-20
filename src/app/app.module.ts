import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboarddComponent } from './dashboardd/dashboardd.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { MobileComponent } from './mobile/mobile.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { NovelComponent } from './novel/novel.component';
import { ComicComponent } from './comic/comic.component';
import { BiographyComponent } from './biography/biography.component';
import { MusicComponent } from './music/music.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboarddComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MobileComponent,
    FurnitureComponent,
    LaptopComponent,
    TvComponent,
    NovelComponent,
    ComicComponent,
    BiographyComponent,
    MusicComponent,
    RegisterComponent,
    LoginComponent,
    DisclaimerComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
