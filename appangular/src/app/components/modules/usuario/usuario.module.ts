import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { AddUsuariosComponent } from './add-usuarios/add-usuarios.component';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ProvinciasComponent } from '../../provincias/provincias.component';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AddUsuariosComponent,
    EditarUsuarioComponent,
    ProvinciasComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
