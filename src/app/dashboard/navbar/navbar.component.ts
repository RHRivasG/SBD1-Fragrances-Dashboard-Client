import { Component, OnInit } from '@angular/core';
import { query, animate, animateChild, style, trigger, transition, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { ImageService } from '../../auth/services/image-service.service'
import { AuthService } from 'src/app/auth/services/auth.service';
import { map } from 'rxjs/operators'

const animation =
  trigger('routeAnimations', [
    transition('master => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '200%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('slave => master', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ])

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    animation
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private iservice: ImageService, private auth: AuthService) { }

  url: string

  ngOnInit(): void {
    this.auth.getProducer()
      .pipe(map(res => this.iservice.getImageLink(res.id, "productor")))
      .subscribe(res => this.url = res)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
