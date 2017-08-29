import {NgModule} from '@angular/core';
import {OrderListComponent} from "./order-list.component";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderFilterPipe} from "./order-filter.pipe";
import {OrderService} from "./order.service";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
@NgModule({
    declarations: [
        OrderListComponent,
        OrderDetailComponent,
        OrderFilterPipe,
    ],
    imports:[
        SharedModule,

        RouterModule.forChild([
            {
                path:'orders', component: OrderListComponent},

            {
                path:'order/:id',  component: OrderDetailComponent
            }
        ])

    ],
    providers:[
        OrderService

    ]

})

export class OrderModule{

}