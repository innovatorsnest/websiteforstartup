import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  slides = [
    {
      image: '../../../assets/uploads/testi_01.png',
      title: 'Wonderful Support!',
      subtitle: 'They have got my project on time with the competition with a sed highly skilled',
      person: 'James Fernando',
      designation: '- Manager of Racer'
    },
    {
      image: '../../../assets/uploads/testi_02.png',
      title: 'Awesome Services!',
      subtitle: 'The master-builder of human happines no one rejects',
      person: 'Venanda Mercy',
      designation: 'Venanda Mercy'
    }
  ];
  showIndicator = true;


  constructor(carauselConfig: CarouselConfig) {
    // carauselConfig.interval = 1500;
    carauselConfig.noPause = true;
    carauselConfig.showIndicators = false;
  }

  ngOnInit() {
  }

}
