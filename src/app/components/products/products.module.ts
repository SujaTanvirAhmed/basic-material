import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductObsoleteComponent } from "./product-obsolete/product-obsolete.component";

@NgModule({
    imports: [CommonModule, ProductsRoutingModule],
    declarations: [
        ProductListComponent,
        ProductCategoryComponent,
        ProductObsoleteComponent
    ]
})
export class ProductsModule { }