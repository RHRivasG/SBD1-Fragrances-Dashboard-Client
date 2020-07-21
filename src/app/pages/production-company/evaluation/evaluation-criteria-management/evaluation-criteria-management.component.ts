import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluation-criteria-management',
  templateUrl: './evaluation-criteria-management.component.html',
  styleUrls: ['./evaluation-criteria-management.component.scss']
})
export class EvaluationCriteriaManagementComponent implements OnInit {

  criteriaForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.criteriaForm = this.fb.group ({
      criteria: ['Criterio 1', Validators.required],
      weight: ['', Validators.compose([Validators.required, Validators.pattern('^0\.[1-9][0-9]$|^0\.[1-9]$|^0\.0[1-9]$|^1\.00$|^[1-9]%$|^[1-9][0-9]%$|^100%$')])],
      name: ['', Validators.required],
      formula: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
