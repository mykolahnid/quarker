import { Component, OnInit, Input } from '@angular/core';
import { Fraction } from "app/shared/fraction";

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.css']
})
export class FractionComponent implements OnInit {
  @Input() fraction: Fraction;

  constructor() { }

  ngOnInit() {
  }

}
