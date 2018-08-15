import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModelComponent } from './add-model/add-model.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import {AddManufacturerComponent} from './add-manufacturer/add-manufacturer.component';

const routes:Routes = [
  {
    path:'manufacturer',
    component:AddManufacturerComponent
  },
  {
    path:'model',
    component:AddModelComponent
  },
  {
    path:'inventory',
    component: ViewInventoryComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [AddModelComponent, ViewInventoryComponent, AddManufacturerComponent];

