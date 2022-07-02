import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character, Response } from '../interfaces/characters.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'https://gateway.marvel.com:443';
  apiKey: string = '2e46d8d87ef8af7725291e79e808afc6';
  endPointHeroes: string = '/v1/public/characters';

  _selectedCharacter: any = null; // character ID by default initialize with null
  listCharacters: Character[] = [];
  _team: Character[] = [];


  constructor(private httpClient: HttpClient) { }


  // Get Heroe ID selected from table
  get selectedCharacter(){
    return this._selectedCharacter;
  }

  set selectedCharacter(value: Character){
    this._selectedCharacter = value;
  }

    // Get Team
    get team(){
      return this._team;
    }

    set team(value: Character[]){
      this._team = value;
    }


  // Get lis all heroes
  getCharacters(): Observable<Response>{
    return this.httpClient.get<Response>(`${this.url}${this.endPointHeroes}?apikey=${this.apiKey}&limit=100`);
  }

  getDetailsByID(): Observable<Response>{
    return this.httpClient.get<Response>(`${this.url}${this.endPointHeroes}/${this._selectedCharacter?.id}?apikey=${this.apiKey}`);
  }






}
