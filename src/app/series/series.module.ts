import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListaComponent } from './series-lista/series-lista.component';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesFormComponent } from './series-form/series-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeriesListaComponent, SeriesFormComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SeriesModule { }
