import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColliderComponent } from './collider/collider.component';
import { ParticlesListComponent } from './particles-list/particles-list.component';
import { ParticleItemComponent } from './particle-item/particle-item.component';
import { FractionComponent } from './fraction/fraction.component';
import { ParticlesService } from 'app/shared/particles.service';

@NgModule({
  declarations: [
    AppComponent,
    ColliderComponent,
    ParticlesListComponent,
    ParticleItemComponent,
    FractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ParticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
