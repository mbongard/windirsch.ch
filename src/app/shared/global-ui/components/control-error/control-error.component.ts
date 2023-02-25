import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {filter, forkJoin, fromEvent, Observable, Subscription, switchMap, take, tap} from "rxjs";
import {HAWK_FRAME_ERRORS} from "../../../utils/errors";

interface CustomErrorMessages {
  [name: string]: string
}

@Component({
  selector: 'app-control-error[control]',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent implements AfterViewInit, OnDestroy {
  @Input() customErrors?: CustomErrorMessages;

  @Input() set control(newControl: AbstractControl) {
    this._control = newControl;
    this.initialize()
  }

  @ViewChild('errorsRef') errorsRef?: ElementRef<HTMLDivElement>;

  _control!: AbstractControl;

  errors: string[] = [];

  unsub = new Subscription();

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.initialize();
  }

  initialize(): void {
    this.unsub.unsubscribe();
    this.unsub = new Subscription();
    this.errors = [];
    const observeBlur: Observable<Event>[] = [];

    if (this.errorsRef?.nativeElement) {
      this.errorsRef.nativeElement.querySelectorAll('input, textarea').forEach(
        el => observeBlur.push(fromEvent(el, 'blur').pipe(take(1)))
      )
    }

    this.unsub.add(
      forkJoin(observeBlur)
      .pipe(
        tap(() => this.updateErrors()),
        switchMap(() =>
          this._control.statusChanges
          .pipe(filter(status => status === 'VALID' || status === 'INVALID'))
        )
      ).subscribe(() => this.updateErrors())
    )
  }

  ngOnDestroy() {
    this.unsub.unsubscribe()
  }

  updateErrors(): void {
    const updatedErrors: string[] = [];
    if (this._control.errors) {
      Object.keys(this._control.errors).forEach(formError => {
        let customError: string | undefined;

        if (this.customErrors) {
          Object.entries(this.customErrors).forEach(entries => {
            const [validatorName, errorMessage] = entries;
            if (this._control.errors?.[validatorName]) {
              customError = errorMessage;
            }
          })
        }

        if (customError) {
          updatedErrors.push(customError);
        } else {
          updatedErrors.push(HAWK_FRAME_ERRORS[formError as keyof typeof HAWK_FRAME_ERRORS]);
        }
      })
    }
    this.errors = updatedErrors;
    this.cdr.markForCheck();
  }
}
