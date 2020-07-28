import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
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
export class AuthCardComponent implements OnInit {

  @Input() title : string
  @Input() imgSrc: string
  @Input() ellipsis: any

  isSelected: boolean

  @Output() selected = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  proc_click() {
    this.isSelected = true
    this.selected.emit()
  }
  
}
