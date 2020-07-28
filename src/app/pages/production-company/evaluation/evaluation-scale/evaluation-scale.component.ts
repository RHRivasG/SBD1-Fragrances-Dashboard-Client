import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-evaluation-scale',
  templateUrl: './evaluation-scale.component.html',
  styleUrls: ['./evaluation-scale.component.scss']
})
export class EvaluationScaleComponent implements OnInit {

  page = 0;

  evalForm: FormGroup

  scaleSource: any

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.evalForm = this.fb.group({
      rangf: ['']
    })

    this.scaleSource = this.route.data.pipe(
      map(res => res.scales)
    )
  }

  ngOnInit(): void {
  }

}
