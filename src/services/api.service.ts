
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http: HttpClient;

  private url = 'https://api.adviceslip.com/advice';

  public slipRequest$ = new Subject<Slip>();

  constructor(public injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  public getAdvice() {
    return this.http
      .get<Slip>(this.url)
      .subscribe(slip => {
        console.log(slip);
        this.slipRequest$.next(slip)
      });
  }
}

export interface Slip {
  id: number;
  advice: string;
}
