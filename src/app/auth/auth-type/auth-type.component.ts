import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-auth-type',
  templateUrl: './auth-type.component.html',
  styleUrls: ['./auth-type.component.scss']
})
export class AuthTypeComponent implements OnInit {
  isProductorSelected: boolean
  isProviderSelected: boolean
  colCount: number

  @Output()
  public optionClicked: EventEmitter<string> = new EventEmitter<string>()

  constructor(bObserver: BreakpointObserver) {
    this.colCount = 2
    bObserver
      .observe([
        Breakpoints.HandsetPortrait
      ])
      .subscribe(
        (res) => {
          if (res.matches)
            this.colCount = 1;
          else
            this.colCount = 2;
          
        }
      )
  }

  ngOnInit(): void {
  }


  on_click(option_name : string) {
    this.optionClicked.emit(option_name)
  }

}
