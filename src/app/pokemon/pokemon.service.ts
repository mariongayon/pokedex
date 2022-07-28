import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Injectable() 
export class PokemonService{
    getPokemons() : Pokemon[]{
        return POKEMONS;
    };

    getPokemon(id: number){
    let pokemons = this.getPokemons()
    // Nouvelle méthode typescript, find ne renvoie qu'un élément
    return pokemons.find( x => x.id == id)
    };

    getPokemonTypes() : Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    //updatePokemon(){};
}