import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.scss'],
  animations: [
    trigger('un-selected', [
      state('selected', style({
        border: '5px solid #F8A848'
      })),
      state('unselected', style({
        border: 'none'
      })),
      transition('selected => unselected', [
        animate('0.10s', keyframes([
          style({ border: '5px solid #F8A848' }),
          style({ border: 'none' })
        ]))
      ]),
      transition('unselected => selected', [
        animate(0, keyframes([
          style({ border: 'none' }),
          style({ border: '5px solid #F8A848' })
        ]))
      ])
    ])
  ]
})
export class EvaluationCardComponent implements OnInit {

  @Input() imgSrc: string
  @Input() fTitle: string
  @Input() backColor: string

  @Output() click = new EventEmitter()

  isSelected: boolean

  constructor() { }

  ngOnInit(): void {
  }

  proc_click() {
    this.click.emit()
  }
}
