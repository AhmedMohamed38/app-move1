import { movieaObject } from './../../object';
import { Component } from '@angular/core';
import { GetApiService } from '../../get-api.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(public _GetApiService:GetApiService){}
  moviesContainer !: movieaObject[]
  movieApi:string =`https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940`
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._GetApiService.getApi(this.movieApi).subscribe
    ((ress)=>{
     this.moviesContainer=ress.results
    })
  }

}
