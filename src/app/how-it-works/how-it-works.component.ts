interface Step {
  step: string;
  p: string;
  img: string;
}

import { Component } from '@angular/core';
import { HOWITWORKSService } from './howitworks.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HOWItWORKSComponent {
  constructor(private step: HOWITWORKSService) {}
  ngOnInit(): void {
    this.Get_data_from_SERVICES();
  }
  title = 'How-It-Works';
  Steps: Step[] = [];
  Get_data_from_SERVICES() {
    this.step.Get_data_From_SERVER().subscribe((data: any) => {
      console.log(data);
      this.Steps = data;
    });
  }
}
