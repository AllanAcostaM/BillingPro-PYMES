import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';
import { CountUpOnScrollDirective } from '../../directives/count-up/count-up-on-scroll.directive';
import { VanillaTiltDirective } from '../../directives/vanilla-tilt/vanilla-tilt.directive';

@Component({
  selector: 'app-pre-login',
  imports: [
    AnimateOnScrollDirective,
    VanillaTiltDirective,
    RouterModule,
    CountUpOnScrollDirective,
  ],
  templateUrl: './pre-login.component.html',
  styleUrl: './pre-login.component.scss',
})
export class PreLoginComponent {}
