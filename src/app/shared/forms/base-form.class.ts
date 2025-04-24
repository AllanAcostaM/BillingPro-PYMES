import { FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class BaseForm {

  public form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  /**
   * Retorna el control del formulario por su nombre.
   * @param controlName Nombre del control.
   */
  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  /**
   * Actualiza el valor de un campo específico.
   * @param fieldName Nombre del campo.
   * @param value Nuevo valor.
   */
  public setFieldValue(fieldName: string, value: any): void {
    const control = this.getControl(fieldName);
    if (control) {
      control.setValue(value);
    }
  }

  /**
   * Parchea el formulario con los valores proporcionados.
   * @param values Objeto con los nuevos valores.
   */
  public patchForm(values: Partial<any>): void {
    this.form.patchValue(values);
  }

   /**
   * Verifica si un control tiene un error específico y si ya fue tocado o modificado.
   * @param controlName Nombre del control.
   * @param errorCode Código del error a verificar.
   */
   public hasError(controlName: string, errorCode: string): boolean {
    const control = this.getControl(controlName);
    return control ? control.hasError(errorCode) && (control.dirty || control.touched) : false;
  }

   /**
   * Determina si un campo es inválido (por ejemplo, para mostrar mensajes de error en la vista).
   * @param fieldName Nombre del campo.
   */
   public isFieldInvalid(fieldName: string): boolean {
    const control = this.getControl(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  /**
   * Retorna si el formulario es válido.
   */
  public isValid(): boolean {
    return this.form.valid;
  }

  /**
   * Marca todos los controles del formulario como tocados para forzar la visualización de errores.
   */
  public markAllAsTouched(): void {
    this.form.markAllAsTouched();
  }

  /**
   * Reinicia el formulario a sus valores iniciales.
   */
  public resetForm(): void {
    this.form.reset();
  }

  /**
   * Deshabilita todos los controles del formulario, por ejemplo, durante el envío.
   */
  public disableForm(): void {
    this.form.disable();
  }

  /**
   * Habilita todos los controles del formulario.
   */
  public enableForm(): void {
    this.form.enable();
  }

  /**
   * Dispara manualmente la actualización de la validez del formulario.
   */
  public updateFormValidity(): void {
    this.form.updateValueAndValidity();
  }

    /**
   * Método abstracto que debe implementar la lógica de envío del formulario.
   * La implementación concreta definirá cómo manejar el envío (por ejemplo, retornando un Observable).
   */
    public abstract submitForm(): Observable<any>;

}
