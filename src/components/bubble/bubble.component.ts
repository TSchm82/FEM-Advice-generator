import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  public headline = 'Advice 4711';

  constructor() { }

  ngOnInit(): void {
  }

}
