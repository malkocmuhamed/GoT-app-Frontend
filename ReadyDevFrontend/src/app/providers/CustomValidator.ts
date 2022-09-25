import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    FormGroup,
    ValidationErrors
  } from '@angular/forms';
  
  export class CustomValidator {
    constructor() {}
  
    static onlyChar(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value == '') return null;
  
        let re = new RegExp('^[a-zA-Z ]*$');
        if (re.test(control.value)) {
          return null;
        } else {
          return { onlyChar: true };
        }
      };
    }
    static mustMatch(controlName: string, matchingControlName: string): ValidatorFn{
      // return (formGroup: FormGroup) => {
      //   const control = formGroup.controls[controlName];
      //   const matchingControl = formGroup.controls[matchingControlName];
  
      //   if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      //     return;
      //   }
  
      //   // set error on matchingControl if validation fails
      //   if (control.value !== matchingControl.value) {
      //     matchingControl.setErrors({ mustMatch: true });
      //   } else {
      //     matchingControl.setErrors(null);
      //   }
      //   return null;
      // };
      return (control: AbstractControl): ValidationErrors | null => {
        const sourceCtrl = control.get(controlName);
        const targetCtrl = control.get(matchingControlName);
  
        return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
          ? { mismatch: true }
          : null;
      };
    }
  }