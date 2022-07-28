import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColor } from './pokemon-type-color';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';



@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColor,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    PokemonEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
