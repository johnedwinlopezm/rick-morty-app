import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
