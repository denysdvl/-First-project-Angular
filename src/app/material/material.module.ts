import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonToggleModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
