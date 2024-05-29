interface CATS {
  img: string;
  h3: string;
  p: string;
  i: string;
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArticlesService } from './articles.service';
import { ArticleService } from '../SERV-SERVICES/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  parent_show: any;

  constructor(private Art: ArticlesService, private ART: ArticleService) {}
  ngOnInit(): void {
    this.Get_data_from_SERVICES();
  }
  title = 'Article';
  CATS: CATS[] = [];
  Get_data_from_SERVICES() {
    this.Art.Get_data_From_SERVER().subscribe((data: any) => {
      console.log(data);
      this.CATS = data;
    });
  }

  selectArticle(cat: any) {
    this.ART.selectArticle(cat);
  }
}
