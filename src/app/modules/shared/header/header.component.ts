import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  itemSelected;

  pages =  [
    {name: 'Home', link: 'home', active: false},
    {name: 'About Us', link: 'about', active: false},
    {name: 'Our Services', link: 'services', active: false},
    {name: 'Features', link: 'features',active: false},
    {name: 'Testimonals', link: 'testimonals', active: false},
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
