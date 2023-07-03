import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        GifsModule,
        HttpClientModule,
        FontAwesomeModule,
    ]
})
export class AppModule { }
