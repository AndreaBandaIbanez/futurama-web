import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeason, ISeasonResponse } from './season.model.component';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  
url = 'https://futuramaapi.com/api'
  constructor(private http : HttpClient) { 

  }

  getAllSeason(page: number) : Observable<HttpResponse<ISeasonResponse>>{
  return this.http.get<ISeasonResponse>(`${this.url}/seasons?page=${page}`, {observe:'response'}) 
  }

  getSeason(id: String) : Observable<HttpResponse<ISeason>>{
    return this.http.get<ISeason>(`${this.url}/seasons/${id}`, {observe:'response'}) 
  }
}
