import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { of, Observable } from 'rxjs';
import { BaseForm } from '../../shared/forms/base-form.class';
import { FormValidators } from '../../shared/forms/form-validators.class';
import {
  BranchesService,
  Branch,
} from '../../shared/services/data/branches.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';
import { VanillaTiltDirective } from '../../directives/vanilla-tilt/vanilla-tilt.directive';

@Component({
  selector: 'app-sign-in',
  imports: [SharedModule, AnimateOnScrollDirective, VanillaTiltDirective, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent extends BaseForm implements OnInit {
  public passwordVisible: boolean = false;
  public branches: Branch[] = [];
  public showPasswordSentPopup = false;

  constructor(
    private branchesService: BranchesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(new FormGroup({}));
  }

  ngOnInit(): void {
    this.branchesService.getBranches().subscribe((data) => {
      this.branches = data;
    });

    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        FormValidators.emailValidator(),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        FormValidators.passwordStrength(6),
      ]),
      branch: new FormControl('', [
        Validators.required,
        FormValidators.selectRequiredValidator(),
      ]),
      terms: new FormControl(false),
    });

    this.route.queryParams.subscribe((params) => {
      if (params['info'] === 'sent') {
        this.showPasswordSentPopup = true;
        setTimeout(() => (this.showPasswordSentPopup = false), 5000);
      }
    });
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
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
