import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "https://recipesapi.herokuapp.com/api/search"
  constructor(private http: HttpClient) { }

  getSearchData(item:any): Observable<any>{
    let params = new HttpParams();
    params = params.append('q', item);
    return this.http.get(this.url, {params})
  }
}
