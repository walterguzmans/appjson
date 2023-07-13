import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { AddUsuariosComponent } from './add-usuarios/add-usuarios.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AddUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule    
  ]
})
export class UsuarioModule { }
