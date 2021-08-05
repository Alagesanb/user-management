import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  baseUrl = 'http://localhost:8080/api/usermanagement';

  constructor(private httpClient: HttpClient) { }

  create(data) {
    console.log(data);
    return this.httpClient.post(`${this.baseUrl}/create`, data);
  }

  login(data) {
    console.log(data);
    return this.httpClient.post(`${this.baseUrl}/login`, data);
  }
  
}
