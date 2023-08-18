import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BASE_URL = 'api/books';
  constructor(private http:HttpClient) { }

  getBook() : Observable<Ibook[]>{
    return this.http.get<Ibook[]>(this.BASE_URL);
  }

  getBookById(id : number) : Observable<Ibook>{
    return this.http.get<Ibook>(`${this.BASE_URL}/${id}`);
  }

}
