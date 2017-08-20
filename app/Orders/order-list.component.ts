import {Component, OnInit} from "@angular/core";
import {IOrder} from "./orders"
import {OrderService} from "./order.service"


@Component ({

    selector: 'pm-order',
    templateUrl: 'app/orders/order-list.component.html',
    styleUrls: ['app/orders/order-list.component.css']
})

export class OrderListComponent implements OnInit {

    Rating: string = "5star";
    errorMessage: string;
    listFilter: string;
    showImage:boolean= false;
    pagetitle: string= 'Order List';


    orders: IOrder[];

    constructor(private _orderService: OrderService){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._orderService.getOrders()
            .subscribe(orders => this.orders= orders,
            error => this.errorMessage = <any>error)

    }
    onRatingClicked(message: string): void{
        this.Rating =   message;

    }
}