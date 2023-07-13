import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
