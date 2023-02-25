import {AsyncValidatorFn, FormControl, ValidatorFn} from "@angular/forms";

export const stringField = (
  options?: {
    validators?: ValidatorFn | ValidatorFn[],
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[],
    initialValue?: string
  }
): FormControl<string> =>
  new FormControl<string>(options?.initialValue || '', {
    nonNullable: true,
    validators: options?.validators,
    asyncValidators: options?.asyncValidators
  });

export const numberField = (
  options?: {
    validators?: ValidatorFn | ValidatorFn[],
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[],
    initialValue?: number
  }
): FormControl<number> =>
  new FormControl<number>(options?.initialValue || 0, {
    nonNullable: true,
    validators: options?.validators,
    asyncValidators: options?.asyncValidators
  });

export const structField = <T>(
  typeValue: T,
  initialValue?: T,
  validators?: ValidatorFn | ValidatorFn[],
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[]
): FormControl<T | null> =>
  new FormControl<T | null>(initialValue || null, {
    validators,
    asyncValidators
  });
