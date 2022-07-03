import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesService } from '../services/heroes.service';
import { Character, Response } from '../interfaces/characters.interface';
import { FilterPipe } from '../pipes/filter.pipe';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCharacters: Character[] = [];
  filterCharacter = '';
  pages: number = 1;
  counterHeroesAdded: number = 0;

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loadListCharacters();
  }

  // Method to load all the heroes in the list
  loadListCharacters(): void {
    this.heroesService.getCharacters()
    .subscribe(data_list_characters => this.listCharacters = data_list_characters.data.results);
  }

  // Method to get the object data (hero) selected in the row table
  selectedHeroID(hero: Character){
    this.heroesService.selectedCharacter = hero;
  }

  // Method to add a hero to the team when apply in the button 'add' of the table
  addHeroTeam(memberTeam: Character){
    this.heroesService.selectedCharacter = memberTeam;
    if(this.heroesService._team.length > 5){ // check if there are already 6 heroes selected to the team, show message
      Swal.fire('Team limited to 6 superheroes!', 'You have already 6 member in the team', 'warning')
    }else if(this.heroesService.isMemberInTheTeam(memberTeam) >= 0){ // check if is selecting 2 times the same hero
      Swal.fire('Twins ' + memberTeam.name + ' in the team?', 'Choose another heroe, ' + memberTeam.name + ' is already in the team', 'question')
    }else{ // case not errors, add hero in the team
      this.heroesService._team.push(memberTeam);
    }
  }

    // Method to delete a hero when apply in the button 'delete' of the table
  deleteHeroTeam(memberTeam: Character){
    let memberToRemove = this.heroesService.isMemberInTheTeam(memberTeam); // check if the hero was selected to the team
    if(memberToRemove == -1){ // case was not selected throw a message
      Swal.fire('Error! ' + memberTeam.name + ' was not selected before!', 'Maybe you wanted to remove other!!', 'error')
    }else{ // case was selected remove from the team
      this.heroesService._team.splice(memberToRemove, 1);
      Swal.fire('Removed! ' + memberTeam.name, ' ..Oh! maybe for another time you will choose him!!', 'success')
    }
  }

  // Method to get the info of the array created with the heroes selected to the team
  getTeam(){
    return this.heroesService._team;
  }

  // Method to counting the number of heroes
  countedTeam(){
    return this.heroesService._team.length;
  }


}
