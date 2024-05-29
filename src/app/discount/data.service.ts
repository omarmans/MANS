import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  api = 'https://first-project-55809-default-rtdb.firebaseio.com/';
  post_sign(data: any) {
    return this.http.post(this.api + 'post.json', data);
  }
}
