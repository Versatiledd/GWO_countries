import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import {
  BehaviorSubject,
  catchError,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { Country, DetailedInfoAboutCountry } from './country';

@Injectable({
  providedIn: 'root',
})
export class countryService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  countryName = new Subject<string>();

  getCountriesByRegion(continent: string | undefined) {
    let url = `https://restcountries.com/v3.1/region/${continent}`;

    return this.http.get<Country[]>(url).pipe(
      catchError((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Przepraszamy za utrudnienia.',
          detail: 'Nie można pobrać listy krajów. Spróbuj póżniej!',
        });
        return throwError(() => err);
      })
    );
  }

  getDetailedInformation(countryName: string) {
    let url = `https://restcountries.com/v3.1/name/${countryName}`;

    return this.http.get<DetailedInfoAboutCountry>(url).pipe(
      catchError((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Przepraszamy za utrudnienia.',
          detail: 'Nie można pobrać kraju. Spróbuj póżniej!',
        });
        return throwError(() => err);
      })
    );
  }

  giveInfoAboutCountry() {
    return this.countryName.asObservable();
  }
}
