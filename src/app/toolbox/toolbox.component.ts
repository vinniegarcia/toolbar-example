import { Component, OnInit } from '@angular/core';
import { IToolbarItem } from '../toolbar-item/toolbar-item.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  items: Array<IToolbarItem> = [
    { name: 'About', onClick: (e) => console.log(e) },
    { name: 'Home', onClick: (e) => console.log(e) },
    { name: 'Contact', onClick: (e) => console.log(e) }
  ];

  constructor() { }

  ngOnInit() {
  }

}
