import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { Observable, Subject, empty } from 'rxjs';
import { Serie } from '../serie';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';


@Component({
  selector: 'app-series-lista',
  templateUrl: './series-lista.component.html',
  styleUrls: ['./series-lista.component.scss']
})
export class SeriesListaComponent implements OnInit {
  series$: Observable<Serie[]>;
  error$ = new Subject<boolean>();

  constructor(private seriesService: SeriesService,
    private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {

    this.series$ = this.seriesService.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty();
        })
      );
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }
}
