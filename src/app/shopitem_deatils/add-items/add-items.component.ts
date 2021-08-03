import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.css"],
})
export class AddItemsComponent implements OnInit {
  inventoryForm: FormGroup;
  constructor(
    private itemsService: ItemsService,
    private fb: FormBuilder,
    private route: Router
  ) {}
  ngOnInit() {
    this.initializedForm();
    const data = this.itemsService.editdataSend;
    this.inventoryForm.patchValue(data); // bind data in edit form
  }

  initializedForm() {
    this.inventoryForm = this.fb.group({
      item_name: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      added_by: ["", Validators.required],
    });
  }

  get f() {
    return this.inventoryForm.controls;
  }
  submitForm() {
    if (this.inventoryForm.valid) {
      // save data
      this.itemsService.itemsListStote.push(this.inventoryForm.value);
      this.route.navigate(["/item-list"]);
    }
  }
}
