import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserComponent } from './components/browser/browser.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { MainComponent } from './pages/main.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardsComponent,
    BrowserComponent,
    GifListComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class GifsModule { }
