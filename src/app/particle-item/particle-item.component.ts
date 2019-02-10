import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';

@Component({
  selector: 'app-particle-item',
  templateUrl: './particle-item.component.html',
  styleUrls: ['./particle-item.component.css']
})
export class ParticleItemComponent implements OnInit {
  @Input() item: Particle;
  @ViewChild('particleDiv') particleDiv: ElementRef;

  initHeight: number = 230;
  initWidth: number = 150;
  scale: number = 1;

  ngOnInit() {
  }

  pass() {
    console.log(this.particleDiv);
    console.log(this.particleDiv.nativeElement);
    console.log(this.particleDiv.nativeElement.offsetWidth);
    console.log(this.particleDiv.nativeElement.offsetHeight);

    this.scale = this.particleDiv.nativeElement.offsetWidth / this.initWidth;

  }

  getStyle() {
    // return '"translate(-50%, -50%) scale("' + this.scale +
    //   '")"';
    console.log('translate(-50%, -50%) scale(' + this.scale + ')');
    return 'translate(-50%, -50%) scale(' + this.scale + ')';
  }
}
