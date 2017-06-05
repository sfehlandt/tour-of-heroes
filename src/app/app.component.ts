import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero : Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
