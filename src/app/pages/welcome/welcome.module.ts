import { NgModule } from '@angular/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    NzCollapseModule,
    NzRadioModule,
    FormsModule,
    NzSwitchModule,
  ],
  declarations: [WelcomeComponent, TestComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
