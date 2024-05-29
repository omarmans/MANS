import { Component, OnInit } from '@angular/core';
import { TETSService } from './tets.service';
interface data {
  img: string;
  Title: string;
  h3: string;
  i_full: string;
  i_empty: string;
  p: string;
  stars: number;
}
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  constructor(private Test_coments: TETSService) {}

  ngOnInit(): void {
    this.get_data();
  }
  title = 'Testimonials';
  comments: data[] = [];

  get_data() {
    this.Test_coments.Get_data_From_SERVER().subscribe((comm: any) => {
      this.comments = comm;
      this.comments.forEach((comment) => {
        comment.stars = this.getRandomStars();
      });
      console.log(comm);
    });
  }
  getRandomStars(): number {
    return Math.floor(Math.random() * 5);
  }
}
