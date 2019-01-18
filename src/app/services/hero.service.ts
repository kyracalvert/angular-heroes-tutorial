import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // replace the getHeroes method to accept an Obsevable
  // of(HEROES) returns an Observable<Hero[]> that emits
  // a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    return of (HEROES);
  }

  constructor() { }
}
