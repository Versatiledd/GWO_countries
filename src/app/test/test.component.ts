import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { DetailedInfoAboutCountry } from '../country-list/country';
import { countryService } from '../country-list/countryService';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
  name = '';
  countryData: DetailedInfoAboutCountry[] = [];
  currency: string[] = [];
  language: {}[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(
    private countryService: countryService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getSingleCountry();
  }

  ngDoCheck() {
    this.getCurrencies();
    this.getLanguage();
  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }

  // pobiera informacje o danym kraju
  getSingleCountry() {
    this.countryService
      .getDetailedInformation(this.route.snapshot.params['country'])
      .pipe(takeUntil(this.endSubs$))
      .subscribe((data: any) => {
        this.showNotification();
        this.countryData = data;
      });
  }
  // pobiera dynamicznie klucz z obiektu waluty dowolnego kraju
  getCurrencies() {
    this.currency = this.countryData.map((el) => {
      return Object.keys(el.currencies)[0];
    });
  }
  // pobiera dynamicznie klucz z obiektu języka dowolnego kraju
  getLanguage() {
    this.language = this.countryData.map((el) => {
      let keyOfLanguage = Object.keys(el.languages)[0];

      return el.languages[keyOfLanguage];
    });
  }

  showNotification() {
    this.messageService.add({
      severity: 'success',
      summary: `Wczytano kraj : ` + this.route.snapshot.params['country'],
      detail: 'Zapoznaj się z informacjami.',
    });
  }
}
