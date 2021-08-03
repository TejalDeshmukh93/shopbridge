import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-action-cell-renderer",
  template: `
    <i
      class="bi bi-pencil-square btn-action"
      (click)="edit()"
      aria-hidden="true"
    ></i>
    <i
      class="bi bi-trash-fill btn-action"
      (click)="delete()"
      aria-hidden="true"
    ></i>
  `,
  styles: [
    `
      .btn-action {
        color: #6c4e97;
        margin: 0 1rem;
        cursor: pointer;
        font-size: 16px;
      }
    `,
  ],
})
export class ActionCellRendererComponent implements ICellRendererAngularComp {
  constructor() {}

  public params: any;
  parent: any;

  agInit(params: any): void {
    this.params = params;
    this.parent = this.params.context.componentParent;
  }
  refresh(): boolean {
    return false;
  }

  delete() {
    this.parent.deleteData(this.params.data);
  }

  edit() {
    this.parent.editData(this.params.data);
  }
}
