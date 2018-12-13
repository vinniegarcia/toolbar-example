import { Component, OnInit } from '@angular/core';
import { IToolbarItem } from '../toolbar-item/toolbar-item.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  items: Array<IToolbarItem> = [
    { name: 'Home', onClick: (e) => console.log(e), icon: 'home' },
    { name: 'Contact', onClick: (e) => console.log(e), icon: 'phone' },
    { name: 'App1', onClick: (e) => console.log(e), icon: 'save' },
    { name: 'Settings', onClick: (e) => console.log(e), icon: 'cog' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
