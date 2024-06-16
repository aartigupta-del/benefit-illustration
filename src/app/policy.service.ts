import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:5000/api/policies';

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  calculatePolicy(policyParams: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/calculate`, policyParams);
  }
}
