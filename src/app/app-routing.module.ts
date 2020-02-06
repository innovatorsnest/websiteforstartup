import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ServicesComponent } from './modules/services/services.component';
import { FeaturesComponent } from './modules/features/features.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
