import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private readonly API = `${environment.API}series`;

  constructor(private http: HttpClient) { }

  //listando as series
  list() {
    return this.http.get<Serie[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log));
  }

  /**
   * 
   * @param serie 
   */
  create(serie) {
    return this.http.post(this.API, serie).pipe(take(1));
  }
}
