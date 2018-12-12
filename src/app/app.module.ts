import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarItemComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, ToolbarComponent]
})
export class AppModule { }
