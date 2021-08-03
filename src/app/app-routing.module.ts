import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ItemListComponent } from "./shopitem_deatils/item-list/item-list.component";
import { AddItemsComponent } from "./shopitem_deatils/add-items/add-items.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "item-list",
    component: ItemListComponent,
  },
  {
    path: "add-item",
    component: AddItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const componentList = [
  LoginComponent,
  ItemListComponent,
  AddItemsComponent,
];
