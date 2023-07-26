import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario} from 'src/app/core/models/usuario';
import { UsuariosClass } from 'src/app/core/models/usuarios-class';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent {

  public data: UsuariosClass = new UsuariosClass();

  constructor(public dialogRef: MatDialogRef<EditarUsuarioComponent>,
              @Inject(MAT_DIALOG_DATA) public pUsuario: Usuario,
              private readonly usuarioSV: UsuariosService,) 
  {
    this.getData(pUsuario.id);
  }

  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  public getErrorMessage() {
    return this.formControl.hasError('required') ? 'El campo es requerido.' :
           this.formControl.hasError('email') ? 'El correo no es válido.' :
           '';
  }

  private getData(id: number) {
    console.log('getdata' + id)    
    this.usuarioSV.getUsuario(id).subscribe(
      resp => { 
        this.data = resp;
        console.log(this.data);
      },
      error => { },
      () => {}
    )
  }

  public submit(): void  {
    this.usuarioSV.putUsuario(this.data).subscribe(
      resp => { 
        this.data = resp;
        this.dialogRef.close();
        console.log('Salvando datos.');
      },
      error => { 
        console.log('Error al salvar los cambios.');
      },
      () => {}
    )
  }

  public cancelar(): void {
    //this.getData(this.id);
    this.dialogRef.close('Cancelar');
  }
}
