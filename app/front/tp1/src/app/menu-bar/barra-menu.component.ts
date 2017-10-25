import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {PeliculaService} from '../movie-service/pelicula.service';


@Component({
  selector: 'barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit{

constructor(private service:PeliculaService,private router:Router){}

ngOnInit():void{
}

 goSearchList(movie){
   this.router.navigate(['/list-movies', movie]);
 }

}
