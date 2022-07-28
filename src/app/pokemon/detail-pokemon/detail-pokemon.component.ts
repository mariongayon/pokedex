import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  
  pokemon: Pokemon = null

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private _pokemonService: PokemonService) { }

  ngOnInit(): void {    
    // Récupérer l'ID depuis notre URL avec l'objet route
    let id = +this.route.snapshot.params['id'];
    this.pokemon = this._pokemonService.getPokemon(id)
  }

  goBack(): void {
    // Méthode de redirection grâce à ton objet router
    this.router.navigate(["/pokemons"]);
  }

}
