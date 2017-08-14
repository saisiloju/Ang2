import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ProductFilterPipe} from './Products/product-filter.pipe';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './Products/product-list.component';

import  {StarComponent} from './shared/star.component';
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent, ProductListComponent, ProductFilterPipe, StarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
