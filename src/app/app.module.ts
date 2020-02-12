import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { FeaturesComponent } from './modules/features/features.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { ServicesComponent } from './modules/services/services.component';
import { HomeComponent } from './modules/home/home.component';
import { NgxModule } from './ngx-boostrap/ngx.module';



// "postinstall": "ng build --output-path websiteforstartup  --aot --prod"

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
