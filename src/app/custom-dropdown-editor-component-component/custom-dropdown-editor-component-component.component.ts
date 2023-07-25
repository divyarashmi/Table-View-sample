import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-dropdown-editor-component-component',
  templateUrl: './custom-dropdown-editor-component-component.component.html',
  styleUrls: ['./custom-dropdown-editor-component-component.component.css']
})
export class CustomDropdownEditorComponentComponentComponent implements OnInit, ICellRendererAngularComp {
  value: string ='';
  
  
  
  public selectedValue: string='';
   

  constructor() { }

  ngOnInit(): void {
  }
  agInit(params: ICellRendererParams): void {
    this.selectedValue = params.value;
    // this.options = params.options;
  }
  refresh(params: any): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
  menuitemclicked(event:any) {
    //const action = event.target.dataset.action;
    console.log(this.selectedValue);
  }
  getValue(): any {
    return this.selectedValue;
  }

}
