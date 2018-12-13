import { Component, OnInit, Input } from '@angular/core';

export interface IToolbarItem {
  name: string;
  onClick: (e: Event) => void;
  icon?: string;
}

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.scss']
})
export class ToolbarItemComponent implements OnInit {

  @Input() item: IToolbarItem;

  onClick(e: Event) {
    this.item.onClick(e);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
