import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  imports: [CarouselModule.forRoot()],
  exports: [
    CarouselModule
  ]
})
export class NgxModule {
  constructor() {}
}
