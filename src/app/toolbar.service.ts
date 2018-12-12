import { Injectable } from '@angular/core';
import { IToolbarItem } from './toolbar-item/toolbar-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  getData(): Array<IToolbarItem> {
    return [
      { name: 'Default item', onClick: (e) => console.log(e) },
      { name: 'Default item 2', onClick: (e) => console.log(e) },
      { name: 'Default item 3', onClick: (e) => console.log(e) },
    ];
  }
}
