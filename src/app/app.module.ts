import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColliderComponent } from './collider/collider.component';
import { ParticlesListComponent } from './particles-list/particles-list.component';
import { ParticleItemComponent } from './particle-item/particle-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ColliderComponent,
    ParticlesListComponent,
    ParticleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
