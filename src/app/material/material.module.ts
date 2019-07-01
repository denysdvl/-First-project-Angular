import { NgModule } from '@angular/core';
import {
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
