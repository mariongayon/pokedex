import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  
  pokemons: Pokemon[]
  pokemon: Pokemon = null

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    // Récupérer l'ID depuis notre URL avec l'objet route
   let id = +this.route.snapshot.params['id'];

    // Avec cet ID, récupérer le pokemon et le stocker dans pokemon (FOR, IF)  
    for ( var i=0; i<this.pokemons.length; i++ ) {
      if (this.pokemons[i].id == id) {
        break;
      } this.pokemon = this.pokemons[i];
    }

    // Nouvelle méthode typescript, find ne renvoie qu'un élément
    this.pokemon = this.pokemons.find( x => x.id == id)

    // filter renvoie tous les éléments du tableau par id
    this.pokemon = this.pokemons.filter( x => x.id == id)[0];
  }

  goBack(): void {
    // Méthode de redirection grâce à ton objet router
    this.router.navigate(["/pokemons"]);
  }

}
