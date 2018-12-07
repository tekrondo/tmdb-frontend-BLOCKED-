import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: SingleMovieComponent
      }
    ]
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
    SingleMovieComponent
  ],
  declarations: [
    MoviesComponent,
    SingleMovieComponent
  ]
})
export class AppRoutingModule { }
