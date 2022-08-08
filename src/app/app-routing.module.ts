import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'menu',component: MenuComponent},
  {path:'footer',component: FooterComponent},
  {path:'about',component: AboutComponent},
  {path:'playstation',component: PlaystationComponent},
  {path:'xbox',component: XboxComponent},
  {path:'nintendo',component: NintendoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
