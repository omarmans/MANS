import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  Article_item = new Subject<any>();
  constructor() {}
  selectArticle(article: any) {
    this.Article_item.next(article);
  }
  getArticleUpdates() {
    return this.Article_item;
  }
}
