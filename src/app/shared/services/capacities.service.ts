import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CapacityDTO } from '../models/capacityDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CapacitiesService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<CapacityDTO[]> {
    return this.http.get<CapacityDTO[]>(`${environment.apiUrl}/capacities`);
  }
}
