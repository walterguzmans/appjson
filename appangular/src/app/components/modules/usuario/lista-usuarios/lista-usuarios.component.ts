import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuariosClass } from 'src/app/core/models/usuarios-class';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent {
  public vData: Usuario[];
  public vNuevo: UsuariosClass;
  public displayedColumns: string[] = ['id', 'nombre', 'email', 'edit', 'delete'];

  constructor( private readonly usuarioSV: UsuariosService,
               public dialog: MatDialog)
  {
    this.getData();
  }

  public getData(): void {
    this.usuarioSV.getUsuarios().subscribe(
      (resp) => {
        this.vData = resp;
        console.log(this.vData);
      },
      (error) => {},
      () => {}
    );
  }

  public editarUsuario(indice: number) {
    const ventanaEditar = this.dialog.open(EditarUsuarioComponent, {
      data: { id: this.vData[indice].id },
    });

    ventanaEditar.afterClosed().subscribe( 
      result => {
        if (result != 'Cancelar') {
          this.getData();
          console.log('Actualizando tabla');
        }        
      },
      error => {},
      () => {
      }
    );
  }

  public eliminarUsuario(indice: number){
//    console.log('Eliminando');
    this.usuarioSV.deleteUsuario(this.vData[indice].id).subscribe(
      (resp) => {
        this.getData();
        console.log(this.vData);
      },
      (error) => {
        console.log(error);        
      },
      () => {}
    );
  }
}
