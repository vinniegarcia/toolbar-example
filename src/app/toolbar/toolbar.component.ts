import { Component, OnInit } from '@angular/core';
import { IToolbarItem } from '../toolbar-item/toolbar-item.component';

const ITEM_WIDTH  = 100;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  items: Array<IToolbarItem> = [
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemDrop(e: DropEvent) {
    const { clientX } = e.nativeEvent;
    const insertIndex = Math.floor(clientX / ITEM_WIDTH);
    this.items.splice(insertIndex, 0, e.dragData);
  }

}
