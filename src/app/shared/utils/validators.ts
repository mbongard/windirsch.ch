import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {getValidationError} from "./errors-handling";
import {map, Observable, switchMap, timer} from "rxjs";
import {environment} from "../../../environments/environment";

export const passwordGroupValidator = (passwordField: string, confirmField: string): ValidatorFn =>
  (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField)?.getRawValue();
    const confirmPassword = group.get(confirmField)?.getRawValue();

    if (!password || password.toString().length === 0) {
      return { required: true }
    }

    if (password !== confirmPassword) {
      return getValidationError(e => e.passwordsDoNotMatch);
    }

    return null;
  }

export const createAsyncValidator = <T>(
  control: AbstractControl,
  validator: Observable<T>,
  responseMapper: (res: T) => ValidationErrors | null,
  debounce = environment.debounceTimeFast,
): Observable<ValidationErrors | null> =>
  // Reactive Forms emit call validators every time the input changes, so every input creates a new
  // subscription. For this reason the debounceTime pipe will not work as expected. We can solve
  // this by using a timer, see: https://stackoverflow.com/a/61141676/10694638
  timer(debounce).pipe(switchMap(() => validator.pipe(map(responseMapper))));
