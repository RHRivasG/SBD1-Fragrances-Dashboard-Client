import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  step: string
  isLineal: boolean
  typeFormGroup: FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        map(params => params.get('step')),
        filter(result => result =='type' || result == 'productor' || result == 'provider')
      )
      .subscribe(
        result => {
          this.step = result
          this.isLineal = this.step == 'type' || !this.step
        }
      )

    this.typeFormGroup = this.formBuilder.group({
      dummyInput: ['', Validators.required]
    })

  }

}
