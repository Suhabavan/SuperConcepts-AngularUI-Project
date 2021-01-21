import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpErrorResponse} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IMovie} from '../interfaces/movie';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movieData : IMovie;
  private _url:string="https://crudcrud.com/api/20dafe06b4884e6280c798f9de10a22f/movies/";

  constructor(private http:HttpClient) { }

  getAllMovies():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url).pipe(catchError(this.errorHandler));
  }

  addMovie(movie:IMovie):Observable<IMovie>{
    return this.http.post<IMovie>(this._url,movie).pipe(catchError(this.errorHandler));
  }

  updateMovie(movie:IMovie){
    var movieObj = {
      "Name":movie.Name,
      "Director":movie.Director,
      "Language":movie.Language,
      "Rating":movie.Rating
    }
    return this.http.put(this._url+movie._id,movieObj,{responseType:'text'}).pipe(catchError(this.errorHandler));
  }

  deleteMovie(id:string){
    return this.http.delete(this._url+id,{responseType:'text'}).pipe(catchError(this.errorHandler));
  }

  private _listeners = new Subject<any>(); //Variable
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy:string){
    this._listeners.next(filterBy);
  }

  errorHandler(err:HttpErrorResponse){
    return Observable.throw(err.error.text || "Server Error");
  }

}
