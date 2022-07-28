import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private router: Router, private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this._pokemonService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) : void {
    console.log('Vous avez selectionné ' + pokemon.name);
    this.router.navigate(['/pokemon', pokemon.id])
  }

}

