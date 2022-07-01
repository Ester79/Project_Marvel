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
  comicsHero: any = [];
  storiesHero: any = [];
  seriesHero: any = [];

  // Display/hide tables
  hidewComics = true;
  hideStories = true;
  hideSeries = true;

  filterComic = '';
  filterSerie = '';
  filterStory = '';


  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loadDetailsHero();
  }

  loadDetailsHero(): void {
    this.detailsHero = this.heroesService.selectedCharacter;
    this.comicsHero = this.heroesService.selectedCharacter.comics.items;
    this.storiesHero = this.heroesService.selectedCharacter.stories.items;
    this.seriesHero = this.heroesService.selectedCharacter.series.items;
    console.log("detail hero");
    console.log(this.detailsHero);
    console.log("comic hero");
    console.log(this.comicsHero);
  };

  displayComicsTable(){
    this.hidewComics = false;
    this.hideStories = true;
    this.hideSeries = true;
    this.filterSerie = "";
    this.filterStory = "";
  }

  displayStoriesTable(){
    this.hidewComics = true;
    this.hideStories = false;
    this.hideSeries = true;
    this.filterComic = "";
    this.filterSerie = "";
  }

  displaySeriesTable(){
    this.hidewComics = true;
    this.hideStories = true;
    this.hideSeries = false;
    this.filterComic = "";
    this.filterStory = "";
  }
}
