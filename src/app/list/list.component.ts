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

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loadListCharacters();
  }


  loadListCharacters(): void {
    this.heroesService.getCharacters().subscribe(data_list_characters => {this.listCharacters = data_list_characters.data.results;
      console.log("listado heroes");
      console.log(this.listCharacters);
    } )
  }

}
