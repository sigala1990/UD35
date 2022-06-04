import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formReactive: FormGroup;
  title = 'UD35';
  name = 'adria';

  nombre: any;
  direccion: any;
  cif: any;
  grupo: any;
  listPadre: any = [];
  //@Input() nombre: any;
  constructor(private formBuilder: FormBuilder) {
    this.formReactive = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      cif: ['', Validators.required],
      grupo: ['', Validators.required],
    });
  }
  onResetForm() {
    this.formReactive.reset();
  }
  addnombre() {
    if(this.formReactive.valid){
      let list = [this.nombre, this.direccion, this.cif, this.grupo];
      this.listPadre.push(list);
      
      this.onResetForm();
    }

    alert(this.formReactive.valid);
  }
  getValue(value: string) {
    return this.formReactive.get(value); //retorna todo el control
  }
}
