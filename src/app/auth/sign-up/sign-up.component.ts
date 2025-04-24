import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Observable, of } from 'rxjs';
import { BaseForm } from '../../shared/forms/base-form.class';
import { FormValidators } from '../../shared/forms/form-validators.class';
import {
  BranchesService,
  Branch,
} from '../../shared/services/data/branches.service';
import {
  CountriesService,
  Country,
} from '../../shared/services/data/countries.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';
import { VanillaTiltDirective } from '../../directives/vanilla-tilt/vanilla-tilt.directive';

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule, AnimateOnScrollDirective, VanillaTiltDirective],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends BaseForm implements OnInit {
  public passwordVisible: boolean = false;
  public confirmPasswordVisible: boolean = false;
  public branches: Branch[] = [];
  public countries: Country[] = [];

  constructor(
    private router: Router,
    private CountriesService: CountriesService,
    private branchesService: BranchesService
  ) {
    super(new FormGroup({}));
  }

  ngOnInit(): void {
    this.CountriesService.getCountries().subscribe((data) => {
      this.countries = data;
      this.branchesService.getBranches().subscribe((data) => {
        this.branches = data;
      });
    });

    this.form = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          FormValidators.alphabeticValidator(),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          FormValidators.alphabeticValidator(),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          FormValidators.emailValidator(),
        ]),
        contactNo: new FormControl('', [
          Validators.required,
          FormValidators.phoneNumberValidator(),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          FormValidators.passwordStrength(6),
        ]),
        confirmPassword: new FormControl('', Validators.required),
        branch: new FormControl('', [
          Validators.required,
          FormValidators.selectRequiredValidator(),
        ]),
        country: new FormControl('', [
          Validators.required,
          FormValidators.selectRequiredValidator(),
        ]),
        gender: new FormControl('', Validators.required),
        terms: new FormControl(false, Validators.requiredTrue),
      },
      { validators: FormValidators.matchFields('password', 'confirmPassword') }
    );
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPassword(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  public submitForm(): Observable<any> {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
      return of(this.form.value);
    } else {
      this.markAllAsTouched();
      return of(null);
    }
  }
}
