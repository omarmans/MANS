interface FEAT {
  img: string;
  h2: string;
  p: string;
  class: string;
}
import { Component, OnInit } from '@angular/core';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  constructor(private feat: FeaturesService) {}
  ngOnInit(): void {
    this.get_data_from_services();
  }
  title = 'Features';
  Features: FEAT[] = [];
  get_data_from_services() {
    this.feat.Get_data_From_SERVER().subscribe((feature: any) => {
      console.log('the feat' + feature);
      this.Features = feature;
    });
  }
}
