import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-productors',
  templateUrl: './auth-productors.component.html',
  styleUrls: ['./auth-productors.component.scss']
})
export class AuthProductorsComponent implements OnInit {

  @Input() input : any

  constructor() { }

  ngOnInit(): void {
  }

}
