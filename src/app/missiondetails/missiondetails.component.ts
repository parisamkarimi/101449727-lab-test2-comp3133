import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private missionService: MissionService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.missionService.getMissionById(1).subscribe((data: any): void => {
      this.mission = data;
    });
  }
}