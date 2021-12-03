import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.scss']
})
export class InternoComponent implements OnInit {
  formulario = new FormGroup(
    {
      email: new FormControl('Coloque Correo Electrónico',
        [Validators.required, Validators.email]),
      telefono: new FormControl('Ingrese su Teléfono',
        [Validators.maxLength(10), Validators.required,]),
      password: new FormControl('Ingrese su contraseña', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[A-Z]*[0-9]+')
      ])
    }
  );

  get email (): any {
    return this.formulario.get('email');
  }
  get telefono (): any {
    return this.formulario.get('telefono');
  }
  get password (): any {
    return this.formulario.get('password');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
