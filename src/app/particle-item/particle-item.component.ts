import { Component, OnInit, Input } from '@angular/core';
import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';

@Component({
  selector: 'app-particle-item',
  templateUrl: './particle-item.component.html',
  styleUrls: ['./particle-item.component.css']
})
export class ParticleItemComponent implements OnInit {
  @Input() item: Particle;

  ngOnInit() {
  }

}
