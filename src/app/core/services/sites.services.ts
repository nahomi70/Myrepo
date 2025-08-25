import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sites } from '../interfaces/site.models';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  private http = inject(HttpClient);

  private postUrl = 'https://t-esoft.grh.api/api/sites/create'; // POST pour création
  private getUrl = 'https://t-esoft.grh.api/api/sites';         // GET pour récupération

  private headers = new HttpHeaders().set("X-Tenant-Id", "4450e7d8-b4fc-4f3c-8934-eb0430b3917a");

  createSite(site: Sites): Observable<Sites> {
    return this.http.post<Sites>(this.postUrl, site, { headers: this.headers });
  }

  getSites(): Observable<Sites[]> {
    return this.http.get<Sites[]>(this.getUrl, { headers: this.headers });
  }
}
