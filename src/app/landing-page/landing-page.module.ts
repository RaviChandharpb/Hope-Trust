import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRouter } from './landing-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRouter
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
