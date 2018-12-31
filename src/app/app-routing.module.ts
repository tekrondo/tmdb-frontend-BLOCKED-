import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { ErrorPageComponent } from './404/error-page.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    pathMatch: 'full',
    component: SingleMovieComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [
    // modules
    RouterModule,
    FormsModule,
    CommonModule,

    // components
    MoviesComponent,
    SingleMovieComponent,
    ErrorPageComponent
  ],
  declarations: [
    MoviesComponent,
    SingleMovieComponent,
    ErrorPageComponent
  ]
})
export class AppRoutingModule { }
