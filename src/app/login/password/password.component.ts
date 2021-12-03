import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  formularioEmail = new FormGroup(
    {
      email: new FormControl('Coloque Correo Electrónico',
        [Validators.required, Validators.email])
    }
  );

  get email (): any {
    return this.formularioEmail.get('email');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
