import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesService } from '../services/heroes.service';
import { Character, Response } from '../interfaces/characters.interface';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCharacters: Character[] = [];

  filterCharacter = '';

  heroesTeam: Character[] = [];

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loadListCharacters();
  }


  loadListCharacters(): void {
    this.heroesService.getCharacters()
    .subscribe(data_list_characters => {this.listCharacters = data_list_characters.data.results;
      console.log("list heroes");
      console.log(this.listCharacters);
    });
  }

  selectedHeroID(hero: Character){
    this.heroesService.selectedCharacter = hero;
  }

  addHeroTeam(memberTeam: Character){
    this.heroesService.selectedCharacter = memberTeam;
    if(this.heroesTeam.length > 5){
      alert("You have already 6 member in the team");
    }else if(this.heroesTeam.includes(memberTeam)){
      alert("Choose other Heroe, the heroe selected is already in the team");
    }else{
      this.heroesTeam.push(memberTeam);
    }
  }

  deleteHeroTeam(memberTeam: Character){
    let memberToRemove = this.heroesTeam.indexOf(memberTeam);
    if(memberToRemove == -1){
      alert("Is not possible to remove this member from the team, because was not selected before")
    }else{
      this.heroesTeam.splice(memberToRemove, 1);
    }
  }


}
