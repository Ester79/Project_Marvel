import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// Protocol http
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Services
import { HeroesService } from './services/heroes.service';

// Components
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ComicsPipe } from './pipes/comics.pipe';
import { StoriesPipe } from './pipes/stories.pipe';
import { SeriesPipe } from './pipes/series.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    DetailsComponent,
    TeamComponent,
    FilterPipe,
    ComicsPipe,
    StoriesPipe,
    SeriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
