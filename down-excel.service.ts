import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DownExcelService {
  baseUrl: String = "http://localhost:8080";
  bypassSecurityTrustResourceUrl: any;
   body={
    "jsondata": "[{Name:Sarika,Id:003C6G,Location:Hyderbad,Role:Cloud,Rating:9/10,Salary:12110000,Date:12/2/2001},{Name:Nagendra,Id:00912F,Location:Pune,Role:DBMS,Rating:8/10,Salary:121300000,Date:13/12/2012},{Name:Ramesh,Id:0456JF,Location:Mumbai,Role:AWS,Rating:7/10,Salary:109300000,Date:05/08/2008},{Name:Suresh,Id:04KXF,Location:Kerala,Role:FSD,Rating:8/10,Salary:812100000,Date:31/09/2011}]"}
  constructor(private http: HttpClient) {
    
   }
exportPdf(): Observable<Blob>{
  
  return this.http.post(`${this.baseUrl}/export/pdf`,this.body,{responseType:'blob'});
}
exportExcel(): Observable<Blob>{
  //return this.http.get(`${this.baseUrl}/export/excel12`, {responseType:'blob'});
  return this.http.post(`${this.baseUrl}/export/excel12`,this.body,{responseType:'blob'});
  
}}