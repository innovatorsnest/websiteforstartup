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
    {name: 'Ecommerce', link: 'services'},
    {name: 'Developmemt', link: 'features'},
    {name: 'About Us', link: 'about'},
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
