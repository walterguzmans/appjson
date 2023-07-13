import { Component } from '@angular/core';
import { Usuario} from 'src/app/core/models/usuario';
import { UsuariosClass } from 'src/app/core/models/usuarios-class';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})

export class ListaUsuariosComponent {
  public vData: Usuario[];
  public vNuevo: UsuariosClass;
  public displayedColumns: string[] = ['id', 'nombre', 'email'];

  constructor(private readonly usuarioSV: UsuariosService) {    
    this.getData();
  }

  public getData(): void {
    this.usuarioSV.getUsuarios().subscribe (
      resp => { 
        this.vData = resp;
        console.log(this.vData);
      },
      error => { },
      () => {}
    )
  }

}
