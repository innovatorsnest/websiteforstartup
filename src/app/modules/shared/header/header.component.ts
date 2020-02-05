import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  itemSelected;

  pages =  [
    {name: 'Home', link: 'home'},
    {name: 'About Us', link: 'about'},
    {name: 'Our Services', link: 'services'},
    {name: 'Features', link: 'features'},
    {name: 'Testimonals', link: 'testimonials'},
    {name: 'Contact', link: 'contact'},
  ];
  constructor() { }

  ngOnInit() {
  }

  itemClicked(item) {
    console.log('item', item);
    this.itemSelected = {...item};
    console.log('item selected', this.itemSelected);
  }

}
