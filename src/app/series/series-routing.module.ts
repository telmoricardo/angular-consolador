import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListaComponent } from './series-lista/series-lista.component';
import { SeriesFormComponent } from './series-form/series-form.component';


const routes: Routes = [
  { path: '', component: SeriesListaComponent },
  { path: 'novo', component: SeriesFormComponent},
  { path: 'editar/:id', component: SeriesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
