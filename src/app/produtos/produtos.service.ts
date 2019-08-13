import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { tap, delay, take} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API =  `${environment.API}`;
  
  constructor(private http: HttpClient) { }

  //listando 
  list() {
    return this.http.get<Produto[]>(`${this.API}product/read.php`)
    .pipe(
      delay(2000),
      tap(console.log));
  }

  //cadastro
  create(produto) {
    return this.http.post(`${this.API}product/adicionar.php`, produto).pipe(tap(console.log));
  }
}
