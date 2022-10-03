import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Slip } from 'src/services/api.service';

@Component({
  selector: 'comp-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements AfterViewInit {

  public slip$: Observable<Slip> = this.apiService.slipRequest$.asObservable();

  constructor(private apiService: ApiService) { }

  public ngAfterViewInit(): void {
    this.getAdvice();
  }

  public getAdvice() {
    this.apiService.getAdvice();
  }

}
