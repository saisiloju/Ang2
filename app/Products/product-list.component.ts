import {Component,OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from "./product.service";

@Component({

    selector: 'pm-product',
    templateUrl : 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']

})
export class ProductListComponent implements OnInit{

    Rating: string = "5star";
    listFilter: string;
    showImage:boolean= false;
    pagetitle: string= 'Product List';
    errorMessage: string;
    products: IProduct[];

    constructor(private _productService: ProductService)
    {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }
    onRatingClicked(message: string): void{
        this.Rating =   message;

    }
}

