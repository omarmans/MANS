interface Units {
  num: number;
  Time: string;
  class: string;
}
import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  Units: Units[] = [];
  title = 'EVENTS';
  countDownDate = new Date('Jun 29, 2024 23:59:59').getTime();
  interval: number = 1000;
  counter: any;

  constructor(private unit: EventsService) {}

  get_data() {
    this.unit.Get_data_From_SERVER().subscribe((data: any) => {
      this.Units = data;
      this.counter = setInterval(() => {
        let now = new Date().getTime();
        let distance = this.countDownDate - now;

        this.Units.forEach((unit) => {
          switch (unit.Time) {
            case 'Days':
              unit.num = Math.floor(distance / (1000 * 60 * 60 * 24));
              break;
            case 'Hours':
              unit.num = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              break;
            case 'Minutes':
              unit.num = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
              );
              break;
            case 'Seconds':
              unit.num = Math.floor((distance % (1000 * 60)) / 1000);
              break;
            default:
              break;
          }
        });
        //
        if (distance < 0) {
          clearInterval(this.counter);
        }
      }, this.interval);
    });
  }
  ngOnInit(): void {
    this.get_data();
  }
}

// this.Units.forEach((unit) => {
//   if (unit.Time === 'Days') {
//     unit.num = Math.floor(distance / (1000 * 60 * 60 * 24));
//   } else if (unit.Time === 'Hours') {
//     unit.num = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//   } else if (unit.Time === 'Minutes') {
//     unit.num = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   } else if (unit.Time === 'Seconds') {
//     unit.num = Math.floor((distance % (1000 * 60)) / 1000);
//   }
// });
// TS==>  countDownDate = new Date('May 29, 2024 23:59:59').getTime(); // نهاية الحدث
// js==>  countDownDate = new Date('May 29, 2024 23:59:59')
