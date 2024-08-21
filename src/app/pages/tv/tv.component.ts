import { tvObject } from './../../object';
import { Component } from '@angular/core';
import { GetApiService } from '../../get-api.service';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  constructor(public _GetApiService:GetApiService){}
  tvApi : string =" https://api.themoviedb.org/3/discover/tv?api_key=866cd3a065ef9304a549f1d65e494940"
  tvContainetr!:tvObject[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._GetApiService.getApi(this.tvApi).subscribe((res)=>{
      console.log(res.results) 
      this.tvContainetr = res.results
    })
  }

}
