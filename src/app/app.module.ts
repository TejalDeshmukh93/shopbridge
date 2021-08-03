import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule, componentList } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { ActionCellRendererComponent } from "./shopitem_deatils/action/action-cell-renderer/action-cell-renderer.component";
import { ItemListComponent } from "./shopitem_deatils/item-list/item-list.component";
import { HeaderComponent } from './header/header.component';
const CellRendererComponents = [ActionCellRendererComponent];
@NgModule({
  declarations: [AppComponent, componentList, CellRendererComponents, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ItemListComponent]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CellRendererComponents],
})
export class AppModule {}
