import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { PasswordComponent } from './password/password.component';
import {RouterModule} from "@angular/router";
import { InternoComponent } from './registro/interno/interno.component';
import { ExternoComponent } from './registro/externo/externo.component';
import { RegistroDeVisitasComponent } from './registro-de-visitas/registro-de-visitas.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AccesoComponent,
    RegistroComponent,
    PasswordComponent,
    InternoComponent,
    ExternoComponent,
    RegistroDeVisitasComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        RouterModule,
        ReactiveFormsModule

    ]
})
export class LoginModule { }
