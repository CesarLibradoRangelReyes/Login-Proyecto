export class Registro {
  _id?: number;
  //Id_Registro: number;
  //Id_Datos_Personales: string;
  //Id_Tipos: number;
  Usuario: string;
  Password: string;

  constructor(Id_Registro: number,Id_Datos_Personales: string,Id_Tipos: number,Usuario: string,Password: string){
    //this.Id_Registro = Id_Registro;
    //this.Id_Datos_Personales = Id_Datos_Personales;
    //this.Id_Tipos = Id_Tipos;
    this.Usuario = Usuario;
    this.Password = Password;
  }
}
