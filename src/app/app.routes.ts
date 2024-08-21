import { NotfoundComponent } from './pages/notfound/notfound.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent,title:'home'},
    {path:"movie",component:MoviesComponent,title:'movie'},
    {path:"Tv",component:TvComponent,title:'tv'},
    {path:"**",component:NotfoundComponent,title:'tv'},
];
