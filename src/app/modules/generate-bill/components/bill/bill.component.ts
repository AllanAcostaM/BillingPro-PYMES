import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-bill',
  imports: [CommonModule, MatIconModule, AnimateOnScrollDirective],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss',
})
export class BillComponent {
  constructor(public router: Router, public route: ActivatedRoute) {}
}
