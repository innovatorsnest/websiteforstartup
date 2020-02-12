import { Component, OnInit } from "@angular/core";
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  // providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true }]
})
export class HomeComponent implements OnInit {


  slides = [
    {
      image: '../../../assets/images/sldier-images/slider_01.jpg',
      title: 'Progress your e-trade Business with us !',
      subtitle: 'Grow your business to a new level with our complete E-commerce Solutions.'
    },
    {
      image: '../../../assets/images/sldier-images/slider_02.jpg',
      title: 'we guarantee',
      subtitle: 'Your business growth'
    },
    {
      image: '../../../assets/images/sldier-images/slider_03.jpg',
      title: 'Connect with us',
      subtitle: 'get your free consultation report'
    }
  ];
  showIndicator = true;

  constructor(carauselConfig: CarouselConfig) {

    // carauselConfig.interval = false;
    // carauselConfig.noPause = true;
    // carauselConfig.showIndicators = true;
  }

  ngOnInit() {}

  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }

}
