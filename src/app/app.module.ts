import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { CustomDropdownEditorComponentComponentComponent } from './custom-dropdown-editor-component-component/custom-dropdown-editor-component-component.component';


@NgModule({
  declarations: [
    AppComponent,
  
    
    
    CustomDropdownEditorComponentComponentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    
    //BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
