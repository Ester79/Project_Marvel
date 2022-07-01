import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    DetailsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
