import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GridOptions } from "ag-grid-community";
import { from } from "rxjs";
import { ActionCellRendererComponent } from "../action/action-cell-renderer/action-cell-renderer.component";
import { ItemsService } from "../items.service";
@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"],
})
export class ItemListComponent implements OnInit {
  // ag grid declaration
  gridApi: any = "";
  gridColumnApi: any = "";
  gridOptions;
  searchValue: any = "";
  paginationPageSize = 10;
  defaultColDef = {
    sortable: true,
  };
  rowHeight: any = 40;
  frameworkComponents = {
    actionCellRenderer: ActionCellRendererComponent,
  };
  columnDefs = [
    {
      headerName: "Item Name",
      field: "item_name",
      maxWidth: "280",
      minWidth: "280",
    },
    {
      headerName: "Category",
      field: "category",
      maxWidth: "280",
      minWidth: "280",
    },
    {
      headerName: "Price",
      field: "price",
      maxWidth: "240",
      minWidth: "240",
    },
    {
      headerName: "Added By",
      field: "added_by",
      maxWidth: "280",
      minWidth: "280",
    },
    {
      headerName: "Action",
      cellRenderer: "actionCellRenderer",
      maxWidth: "150",
      minWidth: "150",
    },
  ];
  pageOptions = [5, 10, 25, 50, 100];
  tableData = [];
  constructor(private route: Router, private itemsService: ItemsService) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this,
      },
    };
  }

  ngOnInit() {
    // const data = this.itemsService.itemsListStote;
    this.tableData = this.itemsService.itemsListStote;
  }
  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onPageSizeChanged(event) {
    this.gridApi.paginationSetPageSize(event.target.value);
  }
  deleteData(data) {
    const x = this.itemsService.itemsListStote.findIndex(
      (a) => a.item_name === data.item_name
    );
    this.tableData = this.tableData.splice(x, 1);
    this.itemsService.itemsListStote = this.itemsService.itemsListStote.splice(
      x,
      1
    );
  }
  editData(data) {
    this.route.navigate(["/add-item"]); // redirectiong to add item component
    this.itemsService.editdataSend = data; // assigning data to service variable
  }
  redirectToAddPage() {
    this.route.navigate(["/add-item"]); // redirectiong to add item component
  }
}
