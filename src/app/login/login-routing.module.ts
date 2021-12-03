import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordComponent} from "./password/password.component";
import {RegistroComponent} from "./registro/registro.component";
import {InternoComponent} from "./registro/interno/interno.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login/password', component: PasswordComponent},
      {path: 'registrar/interno', component: InternoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
