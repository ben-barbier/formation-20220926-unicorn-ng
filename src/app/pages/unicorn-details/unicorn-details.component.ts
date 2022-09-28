import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UnicornDTO } from '../../shared/models/unicornDTO.model';
import { SpinnerService } from '../../shared/services/spinner.service';
import { UnicornsService } from '../../shared/services/unicorns.service';

@UntilDestroy()
@Component({
  selector: 'app-unicorn-details',
  templateUrl: './unicorn-details.component.html',
  styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
  public unicorn: UnicornDTO | undefined;

  public unicornForm: FormGroup;

  constructor(
    private unicornsService: UnicornsService,
    activatedRoute: ActivatedRoute,
    spinnerService: SpinnerService
  ) {
    this.unicornForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      birthyear: new FormControl<number | null>(null, [Validators.required, isYoungerThan200]),
    });

    activatedRoute.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      unicornsService
        .get(params['id'])
        .pipe(untilDestroyed(this))
        .subscribe((unicorn) => {
          this.unicorn = unicorn;
          this.unicornForm.controls['name'].setValue(unicorn.name);
          this.unicornForm.controls['birthyear'].setValue(unicorn.birthyear);
        });
    });

    spinnerService.pendingRequests$.pipe(untilDestroyed(this)).subscribe((pendingRequests) => {
      console.count('pendingRequests$');
    });
  }

  public update() {
    this.unicornsService.update({ ...this.unicorn, ...this.unicornForm.value }).subscribe((apiUpdatedUnicorn) => {
      this.unicorn = apiUpdatedUnicorn;
    });
  }
}

function isYoungerThan200(control: FormControl) {
  const isTooOld = new Date().getFullYear() - control.value > 200;
  return isTooOld ? { tooOld: true } : null;
}
