import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-auth-type',
  templateUrl: './auth-type.component.html',
  styleUrls: ['./auth-type.component.scss']
})
export class AuthTypeComponent implements OnInit {
  isProductorSelected: boolean
  isProviderSelected: boolean

  @Output()
  public optionClicked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }


  on_click(option_name : string) {
    this.optionClicked.emit(option_name)
  }

}
