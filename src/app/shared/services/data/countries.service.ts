import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countriesUrl = 'assets/data/countries.json';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }
}
