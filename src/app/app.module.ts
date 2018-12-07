import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MoviesService } from './movies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
