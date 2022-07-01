import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Character } from '../interfaces/characters.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsHero: any;

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loadDetailsHero();
  }

  loadDetailsHero(): void {
    this.detailsHero = this.heroesService.selectedCharacter;
    console.log("detail hero");
    console.log(this.detailsHero);
  };
}
