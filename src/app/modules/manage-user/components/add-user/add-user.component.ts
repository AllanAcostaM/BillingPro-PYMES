import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { of, Observable } from 'rxjs';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { BaseForm } from '../../../../shared/forms/base-form.class';
import { FormValidators } from '../../../../shared/forms/form-validators.class';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-add-user',
  imports: [
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AnimateOnScrollDirective,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent extends BaseForm implements OnInit {
  public passwordVisible = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    super(new FormGroup({}));
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      scno: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        FormValidators.passwordStrength(6),
      ]),
    });
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  public submitForm(): Observable<any> {
    if (this.form.invalid) {
      this.markAllAsTouched();
      return of(null);
    }
    this.router.navigate(['../list'], { relativeTo: this.route });

    return of(this.form.value);
  }
}
