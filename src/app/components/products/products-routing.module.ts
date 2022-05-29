import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductObsoleteComponent } from "./product-obsolete/product-obsolete.component";

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'category', component: ProductCategoryComponent },
    { path: 'obsolete', component: ProductObsoleteComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }