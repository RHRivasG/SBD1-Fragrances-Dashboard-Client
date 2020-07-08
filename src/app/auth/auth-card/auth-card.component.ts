import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
  animations: [
    trigger('un-selected', [
      state('selected', style({
        borderWidth: 3
      })),
      state('unselected', style({
        borderWidth: 0
      })),
      transition('selected => unselected', [
        animate('0.25s')
      ]),
      transition('unselected => selected', [
        animate('0.25s')
      ])
    ])
  ]
})
export class AuthCardComponent implements OnInit {

  @Input() title : string
  @Input() imgSrc: string

  isSelected: boolean

  @Output() selected = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  proc_click() {
    this.selected.emit()
  }
  
}
