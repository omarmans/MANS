interface Statistics {
  i: string;
  number: number;
  p: string;
}
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StaticService } from './static.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.From_ZERO_TO_TOP();
  }
  ngOnInit(): void {
    this.Get_data();
    // this.From_ZERO_TO_TOP();
  }
  Statistics: Statistics[] = [];
  @ViewChild('number') numbers!: ElementRef;
  grow_smozzy = false;
  constructor(private Stat: StaticService) {}

  //get_data-From_services
  Get_data() {
    this.Stat.Stat_from_Server().subscribe((data: any) => {
      this.Statistics = data;
    });
  }

  From_ZERO_TO_TOP() {
    const skillSecOffsetTop = this.numbers.nativeElement.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= skillSecOffsetTop) {
        if (!this.grow_smozzy) {
          //triger
          this.Statistics.forEach((stat) => {
            const target = stat.number;
            stat.number = 0;

            let interval = setInterval(() => {
              stat.number++;
              if (stat.number >= target) {
                clearInterval(interval);
                window.removeEventListener('scroll', () => {
                  clearInterval(interval);
                });
              }
            }, 2000 / target); //to end in the same time
          });
        }
        this.grow_smozzy = true;
      }
    });
  }
}
