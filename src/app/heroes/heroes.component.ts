import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// replaces the HEROES import with the HeroService
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  // replace the definition of heroes property with a simple
  // declaration
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    // add a private heroService parameter of type HeroService to constructor
    // the parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
    private heroService: HeroService
  ) { }

   // create a function to retrieve the heroes from the service.
   getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
