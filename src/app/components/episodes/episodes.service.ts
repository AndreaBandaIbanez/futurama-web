import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisodes, IEpisodesResponse } from './episodes.model.component';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  
url = 'https://futuramaapi.com/api'
  constructor(private http : HttpClient) { 

  }

  getAllEpisodes(page: number) : Observable<HttpResponse<IEpisodesResponse>>{
  return this.http.get<IEpisodesResponse>(`${this.url}/episodes?page=${page}`, {observe:'response'}) 
  }

  getEpisode(id: String) : Observable<HttpResponse<IEpisodes>>{
    return this.http.get<IEpisodes>(`${this.url}/episodes/${id}`, {observe:'response'}) 
  }
   getSearchEpisodes(search: String): Observable<HttpResponse<IEpisodesResponse>>{
      return this.http.get<IEpisodesResponse>(`${this.url}/episodes/?query=${search}`, {observe:'response'}) 
      
    }
}

