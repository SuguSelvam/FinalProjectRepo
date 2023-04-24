import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Software } from './software';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  private baseURL = "http://localhost:8080/api/v1/softwares";

  constructor(private httpClient: HttpClient) { }
  
  getSoftwaresList(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}`);
  }

  createSoftware(software: Software): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, software);
  }

  getSoftwareById(id: number): Observable<Software>{
    return this.httpClient.get<Software>(`${this.baseURL}/${id}`);
  }

  updateSoftware(id: number, software: Software): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, software);
  }

  deleteSoftware(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name :any): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}?name=${name}`);

  }

  findBysoftName1(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}/fetchByRatings1`);
  }

  findBysoftName2(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}/fetchByRatings2`);
  }

  findBysoftName3(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}/fetchByRatings3`);
  }

  findBysoftName4(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}/fetchByRatings4`);
  }

  findBysoftName5(): Observable<Software[]>{
    return this.httpClient.get<Software[]>(`${this.baseURL}/fetchByRatings5`);
  }

}