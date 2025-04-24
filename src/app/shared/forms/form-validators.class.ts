import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class FormValidators {

  /**
   * Valida que dos campos coincidan (por ejemplo, password y confirmPassword).
   * @param field1 Nombre del primer campo.
   * @param field2 Nombre del segundo campo.
   * @returns Un validador de tipo ValidatorFn.
   */
  public static matchFields(field1: string, field2: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control1 = group.get(field1);
      const control2 = group.get(field2);

      if (!control1 || !control2) {
        return null;
      }

      if (control1.value !== control2.value) {
        // Se asigna error al segundo control para indicar que no coincide.
        control2.setErrors({ fieldsNotMatch: true });
        return { fieldsNotMatch: true };
      }

      // Si los valores coinciden, se remueve el error en caso de existir.
      if (control2.errors) {
        delete control2.errors['fieldsNotMatch']
        if (Object.keys(control2.errors).length === 0) {
          control2.setErrors(null);
        }
      }

      return null;
    };
  }

  /**
   * Valida la fortaleza de una contraseña.
   * Requiere: al menos una letra mayúscula, una minúscula, un número y una longitud mínima.
   * @param minLength Longitud mínima requerida (por defecto 6).
   * @returns Un validador de tipo ValidatorFn.
   */
  public static passwordStrength(minLength: number = 6): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value || value.length < minLength) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumber = /[0-9]+/.test(value);
      const hasMinLength = value.length >= minLength;
      const valid = hasUpperCase && hasLowerCase && hasNumber;
      return !valid ? { weakPassword: true } : null;
    };
  }

  /**
   * Valida la coherencia del nombre y el apellido.
   * Requiere: Requiere por lo menos un caracter alfabetico o consonante.
   * @param minLength Solo es permitido el uso de caracteres.
   * @returns Un validador de tipo ValidatorFn.
   */
  public static alphabeticValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      // Permitir letras y espacios
      const valid = /^[A-Za-z\s]+$/.test(value);
      return !valid ? { nonAlphabetic: true } : null;
    };
  }


  /**
   * Valida que el email tenga un formato correcto.
   * (Puedes optar por usar el validador de Angular, pero aquí se muestra un ejemplo personalizado).
   * @returns Un validador de tipo ValidatorFn.
   */
  public static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? null : { invalidEmail: true };
    };
  }

   /**
   * Valida el formato de un número de contacto.
   * Se asegura de que el valor contenga solo dígitos y tenga una longitud razonable.
   * @returns Un validador de tipo ValidatorFn.
   */
   public static phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      // Ejemplo: el número debe tener entre 7 y 15 dígitos.
      const phoneRegex = /^[0-9]{7,15}$/;
      return phoneRegex.test(value) ? null : { invalidPhone: true };
    };
  }

  /**
   * Valida que un campo select tenga un valor seleccionado distinto de vacío.
   * Es útil cuando el valor por defecto es una cadena vacía.
   * @returns Un validador de tipo ValidatorFn.
   */
  public static selectRequiredValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return (control.value === '' || control.value == null) ? { required: true } : null;
    };
  }

}
