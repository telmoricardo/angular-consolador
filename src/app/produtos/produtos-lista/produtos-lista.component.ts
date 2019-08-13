import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  //produtos: Produto[];

  produtos$: Observable<Produto[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    //this.service.list()
      //.subscribe(dados => this.produtos = dados);

      this.produtos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      );

      // this.service.list().subscribe(
        
      // );

  }

}
