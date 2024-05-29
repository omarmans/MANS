import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from '../SERV-SERVICES/article.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent implements OnInit {
  @Output() closepopup = new EventEmitter();
  close() {
    this.closepopup.emit(null);
  }
  @Input() article: any;

  constructor(private ART_SHOW: ArticleService) {}
  // test() {
  //   this.ART_SHOW.Article_item.next(null);
  // }
  ngOnInit(): void {
    // this.GET_ARTI();
  }

  // GET_ARTI() {
  //   this.ART_SHOW.getArticleUpdates().subscribe((article: any) => {
  //     this.article = article;
  //   });
  // }
}
