import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';
import { Enterprise } from 'src/app/models/enterprise';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-productors',
  templateUrl: './auth-productors.component.html',
  styleUrls: ['./auth-productors.component.scss']
})
export class AuthProductorsComponent implements OnInit {

  @Input() input : any

  @Input() authType: any
  
  colCount: number = 3

  constructor(public imageService: ImageService, private authStorage: AuthService, bObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute)
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

  private postEnterprise(f: () => any) {
    f()
      .subscribe(
        res => {
          window.alert(`Autorizacion exitosa: ${res}`)
          this.router.navigate([this.authStorage.redirectUrl])
        },
        e => window.alert(`Autorizacion fallida: ${e.message}`)
      )
  }

  store(e: Enterprise) {
    if (e.tipo == 'V')
      this.postEnterprise(() => this.authStorage.setProvider(e))
    else
      this.postEnterprise(() => this.authStorage.setProducer(e))
  }

}
