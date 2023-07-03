import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyloadsComponent } from './components/lazyloads/lazyloads.component';




@NgModule({
  declarations: [
    SidebarComponent,
    LazyloadsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    LazyloadsComponent
  ]
})
export class SharedModule { }
