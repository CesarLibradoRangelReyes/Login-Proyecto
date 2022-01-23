import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegistroService} from "../../services/registro.service";
import {Registro} from "src/app/models/registro";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {
RegistroForm: FormGroup;
id: string | null;

  constructor(private _registroService: RegistroService, private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute ) {
    this.RegistroForm = this.fb.group({
      //Id_Registro:['', Validators.required],
      //Id_Datos_Personales: ['', Validators.required],
      //Id_Tipos: ['', Validators.required],
      Usuario: ['', Validators.required],
      Password: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerRegistro();
  }

  obtenerRegistro() {
    this._registroService.getRegistro().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  agregarRegistro(){
    console.log(this.RegistroForm);
    console.log(this.RegistroForm.get('Usuario')?.value);

    const REGISTRO: Registro = {
      //Id_Registro: this.RegistroForm.get('Id_Registro')?.value,
      //Id_Datos_Personales: this.RegistroForm.get('Id_Datos_Personales')?.value,
      //Id_Tipos: this.RegistroForm.get('Id_Tipos')?.value,
      Usuario: this.RegistroForm.get('Usuario')?.value,
      Password: this.RegistroForm.get('Password')?.value
    }
      console.log(REGISTRO);
      this.router.navigate(['/']);
  }

  signin(){
    const INGRESAR: Registro = {
      Usuario: this.RegistroForm.get('Usuario')?.value,
      Password: this.RegistroForm.get('Password')?.value
    }
    this._registroService.signIn(INGRESAR).subscribe(
      res => {
        //console.log(INGRESAR);
        this.router.navigate(['/login/password']);
      }, err => console.log(err)
    );

  }
}
