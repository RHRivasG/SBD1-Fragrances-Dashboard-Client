import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-evaluation-home',
  templateUrl: './evaluation-home.component.html',
  styleUrls: ['./evaluation-home.component.scss']
})
export class EvaluationHomeComponent implements OnInit {
  
  colCount: number;
  
  constructor(bObserver: BreakpointObserver) {
    
    bObserver
      .observe([
        Breakpoints.HandsetPortrait
      ])
      .subscribe(
        (res) => {
          if (res.matches)
            this.colCount = 1
        }
      )

    bObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.Medium
      ])
      .subscribe(
        (res) => {
          if (res.matches)
            this.colCount = 2
        }
      )

    bObserver
      .observe([
        Breakpoints.Web,
        Breakpoints.Large
      ])
      .subscribe(
        (res) => {
          if (res.matches)
            this.colCount = 3
        }
      )
  }

  ngOnInit(): void {
  }

}
