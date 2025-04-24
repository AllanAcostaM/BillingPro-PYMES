import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, MatIconModule, AnimateOnScrollDirective],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(public router: Router, public route: ActivatedRoute) {}
}
