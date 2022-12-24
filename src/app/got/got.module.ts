import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GotRoutingModule } from './got-routing.module';
import { GotComponent } from './got.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [GotComponent, CharactersCardComponent],
  imports: [CommonModule, GotRoutingModule, MaterialModule],
})
export class GotModule {}
