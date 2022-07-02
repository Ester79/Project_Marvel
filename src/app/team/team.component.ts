import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Character } from '../interfaces/characters.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  finalTeam: Character[] = [];

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.showTeam();
  }

  showTeam(){
    this.finalTeam = this.heroesService._team;
  }

}
