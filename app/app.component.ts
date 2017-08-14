import {Component} from '@angular/core';
import {ProductService} from "./Products/product.service";



@Component({
    selector: 'pm-app',
    template:`<div> <h1> Sai Siloju {{pagetitle}}</h1>
		<pm-product> </pm-product>
	</div>`,
    providers : [ProductService]
})

export class AppComponent{
    pagetitle: string ='Angular 4 Sample';



}
