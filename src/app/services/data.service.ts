import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(
      'https://thronesapi.com/api/v2/Characters'
    );
  }
}
