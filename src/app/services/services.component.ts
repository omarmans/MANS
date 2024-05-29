interface Service {
  service: string;
  icon: string;
  number: number;
}

import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../team-meamber/teams.service';
import { SERVService } from './serv.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  title = 'Services';
  constructor(private team: SERVService) {}
  ngOnInit(): void {
    this.Get_data_from_SERVICES();
  }

  SERV: Service[] = [];
  Get_data_from_SERVICES() {
    this.team.Get_data_From_SERVER().subscribe((data: any) => {
      console.log(data);
      this.SERV = data;
    });
  }
}
