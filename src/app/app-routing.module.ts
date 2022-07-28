import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent},
  { path: "pokemon/:id", component: DetailPokemonComponent},
  { path: "**", pathMatch: 'full', component: PageNotFoundComponent },
  { path: "", redirectTo: "pokemons", pathMatch: 'full'}
 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
