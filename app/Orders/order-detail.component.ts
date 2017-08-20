import {Component, OnInit} from '@angular/core';
import {IOrder} from "./orders";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'app/orders/order-detail.component.html'

})

export class OrderDetailComponent implements OnInit{

    pageTitle: string = 'OrderDetail'
    product: IOrder;

    constructor(private _route:ActivatedRoute,
                private _router:Router){

    }
    ngOnInit(): void {
        let id= +this._route.snapshot.params['id'];
        this.pageTitle += `:${id}`;
    }
    onBack():void{
        this._router.navigate(['/orders'])
    }

}