import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from "./login/acceso/acceso.component";
import {LoginModule} from "./login/login.module";
import {RegistroComponent} from "./login/registro/registro.component";


const routes: Routes = [
  {path: 'login', component: AccesoComponent,
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'registrar', component: RegistroComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
