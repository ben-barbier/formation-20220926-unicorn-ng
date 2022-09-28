import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UnicornDTO } from '../models/unicornDTO.model';

// Les méthodes des services (qui appellent une API) doivent TOUJOURS retourner un `Observable`
// Les appels d'API doivent TOUJOURS être typés
// On ne doit JAMAIS faire de `.subscribe` dans les services (uniquement dans les composants)
// On doit TOUJOURS utiliser HttpClient pour faire des appels d'API (pas fetch(), ni axios, ni XmlHTtpRequest, ...)

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<UnicornDTO[]> {
    return this.http
      .get<UnicornDTO[]>(`${environment.apiUrl}/unicorns`)
      .pipe(map((unicorns) => unicorns.map((u) => ({ ...u, name: u.name.toUpperCase() }))));
  }

  public create(unicorn: Omit<UnicornDTO, 'id'>): Observable<UnicornDTO> {
    return this.http.post<UnicornDTO>(`${environment.apiUrl}/unicorns`, unicorn);
  }

  public update(unicorn: UnicornDTO): Observable<UnicornDTO> {
    return this.http.put<UnicornDTO>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicorn);
  }

  public get(unicorn: UnicornDTO): Observable<UnicornDTO> {
    return this.http.get<UnicornDTO>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
  }

  public delete(unicorn: UnicornDTO): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
  }
}
