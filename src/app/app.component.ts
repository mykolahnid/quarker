import { Component } from '@angular/core';
import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  particles: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.particles = db.list('/existingParticles')
  }

}
