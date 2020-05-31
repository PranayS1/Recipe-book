import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    AlertComponent
  ],
  imports: [
  ],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    AlertComponent,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
