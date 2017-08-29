import {NgModule} from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductFilterPipe} from "./product-filter.pipe";
import {ProductGuardService} from "./product-guard.service";
import {ProductService} from "./product.service";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports:[
        SharedModule,

        RouterModule.forChild([
            {
                path:'products', component: ProductListComponent
            },

            {
                path:'product/:id', canActivate:[ProductGuardService], component: ProductDetailComponent
            }
        ])

    ],
    providers:[
        ProductService, ProductGuardService

    ]

})

export class ProductModule{

}