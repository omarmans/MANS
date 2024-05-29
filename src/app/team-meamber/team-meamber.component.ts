import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
interface Teams {
  img: string;
  i: {
    facebook: 'fab fa-facebook-f';
    linkedin: 'fab fa-linkedin-in';
    youtube: 'fab fa-youtube';
    website: 'fas fa-globe';
  };
  name: string;
  p: string;
}

@Component({
  selector: 'app-team-meamber',
  templateUrl: './team-meamber.component.html',
  styleUrls: ['./team-meamber.component.scss'],
})
export class TeamMeamberComponent implements OnInit {
  constructor(private team: TeamsService) {}
  ngOnInit(): void {
    this.Get_data_from_SERVICES();
  }
  title = 'Article';
  TEAMS: Teams[] = [];
  Get_data_from_SERVICES() {
    this.team.Get_data_From_SERVER().subscribe((data: any) => {
      console.log(data);
      this.TEAMS = data;
    });
  }
}
