import { AbstractControl, ValidationErrors } from '@angular/forms';

export class oneCharacter {

    constructor(){}

  /**
   * 半角英字大文字, 半角英字小文字, 数字を1文字づつ以上含む
   * @param form 
   * @returns { ValidationErrors | null }
   */

  public static format(form: AbstractControl): ValidationErrors | null{
    const oneCharacter = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/;
    if (oneCharacter.test(form.value)) {
      return null;
    } else {
      return { oneCharacters: { valid: true } };
    }
  }

}