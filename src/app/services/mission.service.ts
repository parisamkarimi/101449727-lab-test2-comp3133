import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  missions = [
    { id: 1, name: 'Mission 1', description: 'Description of Mission 1' },
    { id: 2, name: 'Mission 2', description: 'Description of Mission 2' },
    { id: 3, name: 'Mission 3', description: 'Description of Mission 3' }
  ];

  constructor() {}

  getMissions(): Observable<any[]> {
    return of(this.missions);
  }

  getMissionById(id: number): Observable<any> {
    const mission = this.missions.find(m => m.id === id);
    return of(mission); 
  }
}


