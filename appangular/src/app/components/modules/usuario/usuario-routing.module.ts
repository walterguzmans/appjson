import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { AddUsuariosComponent } from './add-usuarios/add-usuarios.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component:ListaUsuariosComponent},
  { path: 'agregar', component: AddUsuariosComponent }
  
  /*
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'agregar', component: AddUsuariosComponent }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
