import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly url = 'https://api.sheetbest.com/sheets/b359bdd5-2f1f-4959-b577-ebfcf38faaa0';

  constructor(private http: HttpClient) { }

  submitForm(firstName: any, lastName: any) {
    return this.http.post<any>(this.url, { firstName, lastName });
  }
  GetList() {
    return this.http.get<any>(this.url);
  }
}
