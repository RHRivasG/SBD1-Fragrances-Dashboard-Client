import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout"
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, AfterViewInit {
  step: string
  isLineal: boolean
  typeFormGroup: FormGroup
  internal_data: any
  colCount : number
  @ViewChild('stepper') stepper: MatStepper
  
  constructor(private route: ActivatedRoute, private formBuilder : FormBuilder, bObserver: BreakpointObserver)
  {
  }
  
  ngAfterViewInit(): void {
    if (!this.isLineal) this.navigateTo(this.step)
  }

  ngOnInit(): void {
    this.internal_data = this.route.data.pipe(
      map(result => result.logOptions)
    )

    this.route.queryParamMap
      .pipe(
        map(params => params.get('step')),
        filter(result => result =='type' || result == 'productor' || result == 'provider')
      )
      .subscribe(
        result => {
          this.isLineal = result == 'type' || !result
          this.step = result
        }
      )

    this.typeFormGroup = this.formBuilder.group({
      dummyInput: ['', Validators.required]
    })
  }

  navigateTo(option : string) {
    this.step = option
    this.typeFormGroup.get('dummyInput').setValue(option)
    this.stepper.next()
  }

  get data(): any {
    return this.internal_data.pipe(
      map((collection : any[]) => {
        if (this.step == 'productor') return collection.filter(element => !('country' in element))
        else if (this.step == 'provider') return collection.filter(element => 'country' in element)
        else return collection
      })
    )
  }

}
