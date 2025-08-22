import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Structure } from '../interfaces/structure.model';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

private http = inject(HttpClient)
readonly url='https://t-esoft.grh.api/api/structures'
 
 structure : Structure [] = [] //tableu de structure de n'importe quel type
getStructures(): Observable<Structure[]> {
  const headers = new HttpHeaders().append("X-Tenant-Id", "4450e7d8-b4fc-4f3c-8934-eb0430b3917a"); 
  return this.http.get<Structure[]>(this.url, { headers });

}

  
}
