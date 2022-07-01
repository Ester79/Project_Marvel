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

  endPoint_List_All_Heroes: string = '/v1/public/characters';


  constructor(private httpClient: HttpClient) { }


  // Get lis all heroes
  getCharacters(): Observable<Response>{
    return this.httpClient.get<Response>(`${this.url}${this.endPoint_List_All_Heroes}?apikey=${this.apiKey}`);
  }



}
