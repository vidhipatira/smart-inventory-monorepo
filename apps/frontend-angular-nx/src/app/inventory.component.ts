import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  items: any[] = [];

  newItem = { name: '', quantity: 0, price: 0 };

  editingItem: any = null;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.inventoryService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem() {
    this.inventoryService.addItem(this.newItem).subscribe(() => {
      this.inventoryService.getItems().subscribe(data => {
        this.items = data;
      });
      this.newItem = { name: '', quantity: 0, price: 0 };
    });
  }

  startEdit(item: any) {
    this.editingItem = { ...item };
  }

  saveEdit() {
    this.inventoryService.updateItem(this.editingItem.id, this.editingItem)
      .subscribe(() => {
        this.inventoryService.getItems().subscribe(data => {
          this.items = data;
        });
        this.editingItem = null;
      });
  }

  deleteItem(id: number) {
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.inventoryService.getItems().subscribe(data => {
        this.items = data;
      });
    });
  }
}
