
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http: HttpClient;

  private url = 'https://api.adviceslip.com/advice';

  public slipRequest$ = new Subject<Slip>();

  public skip$ = new Subject<void>();

  constructor(public injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  public getAdvice() {
    return this.http
      .get<ApiData>(this.url)
      .pipe(
        map(data => data.slip),
        takeUntil(this.skip$))
      .subscribe(slip => {
        this.slipRequest$.next(slip);
      });
  }
}

interface ApiData {
  slip: Slip;
}

export interface Slip {
  id: number;
  advice: string;
}
