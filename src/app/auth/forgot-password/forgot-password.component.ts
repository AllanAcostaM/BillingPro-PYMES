import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Observable, of } from 'rxjs';
import { BaseForm } from '../../shared/forms/base-form.class';
import { FormValidators } from '../../shared/forms/form-validators.class';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';
import { VanillaTiltDirective } from '../../directives/vanilla-tilt/vanilla-tilt.directive';

@Component({
  selector: 'app-forgot-password',
  imports: [SharedModule, AnimateOnScrollDirective, VanillaTiltDirective, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent extends BaseForm implements OnInit {
  constructor(private router: Router) {
    super(new FormGroup({}));
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        FormValidators.emailValidator(),
      ]),
    });
  }

  public submitForm(): Observable<any> {
    if (this.form.valid) {
      this.router.navigate(['/sign-in'], { queryParams: { info: 'sent' } });
      return of(this.form.value);
    } else {
      this.markAllAsTouched();
      return of(null);
    }
  }
}
