import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //private pokemons: Pokemon[];
  pokemons = POKEMONS;
  color: string = '';

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    console.log(this.pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Le pokemon sélectionné est:' + pokemon.name )
  }
}
