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

import {OrderListComponent} from "./Orders/order-list.component";
import {OrderDetailComponent} from "./Orders/order-detail.component";
import {OrderFilterPipe} from "./Orders/order-filter.pipe";

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
                path:'product/:id', component: ProductDetailComponent
            },
            {
                path:'orders', component: OrderListComponent
            },
            {
                path: 'orders/:id', component: OrderDetailComponent
            },
            {
                path: 'welcome', component: WelcomeComponent
            },
            {
                path: '', redirectTo: 'welcome', pathMatch:'full'
            },
            {
                path: '**', redirectTo: 'welcome', pathMatch:'full'
            },

        ])

    ],
    declarations: [
        AppComponent, ProductListComponent, ProductFilterPipe, OrderFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent,OrderDetailComponent, OrderListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
