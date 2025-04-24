import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
    selector: 'app-loading',
    imports: [AnimateOnScrollDirective],
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

}
