import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
