import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import  {RouterModule} from "@angular/router";

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import { ProductListComponent }  from './Products/product-list.component';
import {ProductDetailComponent} from "./Products/product-detail.component";
import {ProductFilterPipe} from './Products/product-filter.pipe';
import  {StarComponent} from './shared/star.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path:'products', component: ProductListComponent
            },

            {
                path:'products/:id', component: ProductDetailComponent
            },
            {
                path: 'welcome', component: WelcomeComponent
            },
            {
                path: '', redirectTo: 'welcome', pathMatch:'full'
            },
            {
                path: '**', redirectTo: 'welcome', pathMatch:'full'
            }
        ])

    ],
    declarations: [
        AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
