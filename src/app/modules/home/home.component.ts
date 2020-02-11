import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Images = [
    '../../../assets/images/sldier-images/slider_01.jpg',
    '../../../assets/images/sldier-images/slider_02.jpg',
    '../../../assets/images/sldier-images/slider_03.jpg'
  ];

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };

  constructor() {}

  ngOnInit() {}
}
