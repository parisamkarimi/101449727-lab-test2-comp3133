import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: any[] = [];

  constructor(private missionService: MissionService, private router: Router) {}

  ngOnInit(): void {
    this.missionService.getMissions().subscribe((data: any[]) => {
      this.missions = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/mission', id]);
  }
}
