import { FormControl } from '@angular/forms';

const REG = {
  USERNAME: /^\w{1,20}$/,
  PASSWORD: /^\w{6,20}$/,
  EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
};

interface ValidationResult {
  [key: string]: boolean;
}

export class FieldValidators {

  public static username(control: FormControl): ValidationResult {
    if (control.value.length === 0) {
      return {
        empty: true
      };
    }
    if (REG.USERNAME.test(control.value)) {
      return null;
    }
    return { 'invalid': true };
  }
  public static email(control: FormControl): ValidationResult {
    if (control.value.length === 0) {
      return {
        empty: true
      };
    }
    if (REG.EMAIL.test(control.value)) {
      return null;
    }
    return { 'invalid': true };
  }
  public static password(control: FormControl): ValidationResult {
    if (control.value.length === 0) {
      return {
        empty: true
      };
    }
    if (REG.PASSWORD.test(control.value)) {
      return null;
    }
    return { 'invalid': true };
  }

}
