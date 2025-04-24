import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule }    from '@angular/material/datepicker';
import { MatNativeDateModule }    from '@angular/material/core';
import { MatFormFieldModule }     from '@angular/material/form-field';
import { MatInputModule }         from '@angular/material/input';import { of, Observable } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { BaseForm } from '../../../../shared/forms/base-form.class';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-calculate-bill',
  imports: [
    CommonModule,
    MatIconModule,
    AnimateOnScrollDirective,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './calculate-bill.component.html',
  styleUrls: ['./calculate-bill.component.scss']
})
export class CalculateBillComponent extends BaseForm implements OnInit {

    public ratePerUnit = 5;

    constructor(
      private router: Router,
      private route: ActivatedRoute
    ) {
      super(new FormGroup({}));
    }


    ngOnInit(): void {
      this.form = new FormGroup({
        uid: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        dueDate: new FormControl('', [Validators.required]),
        units: new FormControl('', [Validators.required, Validators.min(0)]),
        billDue: new FormControl({ value: '', disabled: true })
      });

      // recalc Bill Due cada vez que cambia "units"
      this.form.get('units')!.valueChanges.subscribe((val) => {
        const ctl = this.form.get('billDue')!;
        if (this.form.get('units')!.valid) {
          ctl.setValue(val * this.ratePerUnit);
        } else {
          ctl.setValue('');
        }
      });
    }

    public submitForm(): Observable<any> {
      if (this.form.invalid) {
        this.markAllAsTouched();
        return of(null);
      }
      this.router.navigate(['../bill'], { relativeTo: this.route });

      return of(this.form.value);
    }
}
