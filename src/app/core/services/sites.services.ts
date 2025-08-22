import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Sites } from '../interfaces/site.models';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  post(formData: any) {
    throw new Error('Method not implemented.');
  }

  private http = inject(HttpClient);

readonly url='https://t-esoft.grh.api/api/sites/create';

private headers = new HttpHeaders().set("X-Tenant-Id", "4450e7d8-b4fc-4f3c-8934-eb0430b3917a");

createSite(site: Sites): Observable<Sites> {

  return this.http.post<Sites>(this.url, site, { headers: this.headers });

}
}
