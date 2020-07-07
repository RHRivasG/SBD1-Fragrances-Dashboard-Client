import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-auth-type',
  templateUrl: './auth-type.component.html',
  styleUrls: ['./auth-type.component.scss'],
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
export class AuthTypeComponent implements OnInit {
  isProductorSelected: boolean
  isProviderSelected: boolean

  @Output()
  public optionClicked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }


  proc_click(option_name : string) {
    this.optionClicked.emit(option_name)
  }

}
