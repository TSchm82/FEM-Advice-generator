import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService, Slip } from 'src/services/api.service';

@Component({
  selector: 'comp-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements AfterViewInit {

  public slip$: Subject<Slip> = this.apiService.slipRequest$;

  constructor(private apiService: ApiService) { }

  public ngAfterViewInit(): void {
    this.getAdvice();
  }
  public getAdvice() {
    this.apiService.getAdvice();
  }

}
