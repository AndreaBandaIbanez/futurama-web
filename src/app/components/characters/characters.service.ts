import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter, ICharacterResponse } from './characters.model.component';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
url = 'https://futuramaapi.com/api'
  constructor(private http : HttpClient) { 

  }

  getAllCharacters(page: number) : Observable<HttpResponse<ICharacterResponse>>{
  return this.http.get<ICharacterResponse>(`${this.url}/characters?page=${page}`, {observe:'response'}) 
  }

  getCharacterById(id: number) : Observable<HttpResponse<ICharacter>> {
    return this.http.get<ICharacter>(`${this.url}/characters/${id}`, {observe:'response'}) 
  }

  getSearchCharacters(page:number , search: String): Observable<HttpResponse<ICharacterResponse>>{
    return this.http.get<ICharacterResponse>(`${this.url}/characters/?query=${search}&page=${page}`, {observe:'response'}) 
    
  }
}

