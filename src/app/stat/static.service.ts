import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticService {
  constructor(private http: HttpClient) {}
  Stat_from_Server() {
    return this.http.get('assets/Data/stat/STatics.json');
  }
}
