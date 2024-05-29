import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface FooterData {
  social_links: [{ class: string; i: string }];
  links: string[];
  gallery_images: string[];
}
@Injectable({
  providedIn: 'root',
})
export class FooterServService {
  constructor(private http: HttpClient) {}
  Stat_from_Server() {
    return this.http.get<FooterData>('assets/Data/footer/footer-data.json');
  }
}
