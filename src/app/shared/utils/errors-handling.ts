import {HAWK_FRAME_ERRORS} from "./errors";
import {ValidationErrors} from "@angular/forms";

export type PropertyFunction = (x: {
  [Property in keyof typeof HAWK_FRAME_ERRORS]: () => string
}) => () => string

export const getValidationError = (expression: PropertyFunction): ValidationErrors => {
  return [nameOfError(expression)].reduce((obj2, key) => {
    obj2[key as keyof ValidationErrors] = HAWK_FRAME_ERRORS[key as keyof typeof HAWK_FRAME_ERRORS];
    return obj2;
  }, {} as ValidationErrors);
}

// https://stackoverflow.com/questions/13612006/get-object-property-name-as-a-string
const nameOfError = (expression: PropertyFunction): string => {
  const res: {
    [Property in keyof typeof HAWK_FRAME_ERRORS]: () => string
  } = {} as { [Property in keyof typeof HAWK_FRAME_ERRORS]: () => string };

  Object.keys(HAWK_FRAME_ERRORS).map(k => res[k as keyof typeof HAWK_FRAME_ERRORS] = () => k);
  return expression(res)();
}

