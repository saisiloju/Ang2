"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./Orders/order.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pagetitle = 'Angular 4 Sample';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "<div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <a class=\"navbar-brand\"> {{pagetitle}}</a>\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a [routerLink]=\"['/welcome']\">Home</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/products']\">Products</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/orders']\">Orders</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>",
            providers: [order_service_1.OrderService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map