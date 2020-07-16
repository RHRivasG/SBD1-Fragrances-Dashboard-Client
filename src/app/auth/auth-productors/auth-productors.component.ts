import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-auth-productors',
  templateUrl: './auth-productors.component.html',
  styleUrls: ['./auth-productors.component.scss']
})
export class AuthProductorsComponent implements OnInit {

  @Input() input : any

  colCount: number = 3

  constructor(public imageService: ImageService, bObserver: BreakpointObserver)
  {
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
