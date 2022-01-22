import { AbstractControl, ValidationErrors } from '@angular/forms';

export class alphanumerics{

    constructor(){}

  /**
   * 半角英数字のみ設定可能
   * @param form 
   * @returns { ValidationErrors | null }
   */

  public static format(form: AbstractControl): ValidationErrors | null{
    const alphanumeric = /^[0-9a-zA-Z]*$/;
    if (alphanumeric.test(form.value)) {
      return null;
    } else {
      return { alphanumeric: { valid: true } };
    }
  }

}