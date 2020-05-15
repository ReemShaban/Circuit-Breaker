import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LevelsPageRoutingModule } from './levels-routing.module';

import { LevelsPage } from './levels.page';
import {SharedComponentsModule} from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [LevelsPage]
})
export class LevelsPageModule {}
