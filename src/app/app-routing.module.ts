import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { DashboarddComponent } from './dashboardd/dashboardd.component';
import { LayoutComponent } from './layout/layout.component';
import { LaptopComponent} from './laptop/laptop.component';
import { NovelComponent } from './novel/novel.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { TvComponent } from './tv/tv.component';
import { ComicComponent } from './comic/comic.component';
import { MobileComponent } from './mobile/mobile.component';
import { MusicComponent } from './music/music.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  { path: 'login',component: LoginComponent},

  {path:'',component:LayoutComponent,
children: [
  {path:'',component:DashboarddComponent},
  {path:'biography',component:BiographyComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'novel',component:NovelComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'tv',component:TvComponent},
  {path:'comic',component:ComicComponent},
  {path:'mobile',component:MobileComponent},
  {path:'music',component:MusicComponent},
  { path : 'aboutus' ,component:AboutusComponent},
  { path : 'contactus' ,component:ContactusComponent},
  { path : 'disclaimer' ,component:DisclaimerComponent},
  { path : 'privacypolicy' ,component:PrivacypolicyComponent}

]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
