import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Observable } from 'rxjs';
import { RawCriteriaService } from '../services/raw-criteria.service';


@Component({
  selector: 'app-evaluate-provider',
  templateUrl: './evaluate-provider.component.html',
  styleUrls: ['./evaluate-provider.component.scss']
})
export class EvaluateProviderComponent implements OnInit {

  showInitial = true
  source: Observable<EvalCriteria[]> = null;

  constructor(private route: ActivatedRoute, public rawService: RawCriteriaService) { }

  ngOnInit(): void {
    this.source = this.route.data.pipe(
      map(resolve => resolve.criteria),
    )
  }

  get criteria(): Observable<EvalCriteria[]> {
    return this.source.pipe(
      map(lCriteria => {
        return lCriteria
          .filter(sCriteria => (this.showInitial && (sCriteria.tipoFormula == 'I')) || (!this.showInitial && (sCriteria.tipoFormula == 'E')))
      })
    )
  }

  getCriteriaNameById(id: number): Observable<string> {
    return this.rawService.findById(id)
      .pipe(
        map(criteria => criteria.nombre)
      )
  }
}
