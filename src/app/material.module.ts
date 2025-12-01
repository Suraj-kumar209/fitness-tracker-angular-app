import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';  
@NgModule({
    imports:[MatNativeDateModule,MatButtonModule,MatIconModule ,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatCheckboxModule],
    exports:[MatNativeDateModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatCheckboxModule]
})

export class MaterialModule{}