import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  }, //Home is the default URL
  {path:'home',component:AppComponent},
  {path:'register',component:AddMovieComponent},
  {path:'movie-list',component:ShowMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AppComponent,AddMovieComponent,ShowMovieComponent]
