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

  public isDisabled = false;

  constructor(private apiService: ApiService) { }

  public ngAfterViewInit(): void {
    this.getAdvice();
  }

  public getAdvice() {
    this.apiService.getAdvice();
    this.startDisableTimer();
  }

  // Handle 2s cache delay for new advices
  private startDisableTimer() {
    this.isDisabled = true;
    setTimeout(() => this.isDisabled = false, 2050);
  }

}
