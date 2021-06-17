import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from '../../shared/components/vmessage/vmodule.module';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from './../../shared/directives/immediate-click/imediate-clicl.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    PhotoModule,
    ImmediateClickModule
  ],
})
export class PhotoFormModule {}
