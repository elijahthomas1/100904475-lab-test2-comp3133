import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Mission } from './mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private REST_API = "https://api.spacexdata.com/v3/launches"

  constructor(private httpClient: HttpClient) { }

  public getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(this.REST_API);
  }

  public getMissionById(id: String) {
    const thepath = { params: new HttpParams({fromString: `id`}) };
  }
}
