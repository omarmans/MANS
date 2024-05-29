import { Component, OnInit } from '@angular/core';
import { FooterServService } from './footer-serv.service';
interface FooterData {
  social_links: [{ class: string; i: string }];
  links: string[];
  gallery_images: string[];
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private footer: FooterServService) {}
  ngOnInit(): void {
    this.Get_data();
  }

  footers: FooterData | null = null;
  Get_data() {
    this.footer.Stat_from_Server().subscribe((data: FooterData) => {
      this.footers = data;
      console.log(this.footers.links);
    });
  }
}
