import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Country } from './country';
import { ActivatedRoute, Router } from '@angular/router';

import { Table } from 'primeng/table';

import { countryService } from './countryService';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries: Country[] = [];

  loading: boolean = true;
  endSubs$: Subject<any> = new Subject();
  linkToSingleCountry = new BehaviorSubject('');

  @ViewChild('dt', { static: true }) table!: Table;

  constructor(
    private countryList: countryService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }

  // pobiera liste krajów w zależności od regionu

  getCountries() {
    this.countryList
      .getCountriesByRegion(
        this.router.routerState.snapshot.url.replace(
          /[&\/\\#,+()$~%.'":*?<>{}]/g,
          ''
        )
      )
      .pipe(takeUntil(this.endSubs$))
      .subscribe((data) => {
        this.showInfo();
        this.countries = data;

        this.loading = false;
      });
  }

  onRowSelect(countryName: string) {
    let nameCountry = countryName.toLocaleLowerCase();

    let pathDetailed = `${this.router.routerState.snapshot.url}/${nameCountry}`;

    this.countryList.countryName.next(nameCountry);

    this.router.navigateByUrl(pathDetailed);
  }

  showInfo() {
    this.messageService.add({
      severity: 'success',
      summary:
        'Lista krajów dla kontynetu: ' +
        this.router.routerState.snapshot.url.replace(
          /[&\/\\#,+()$~%.'":*?<>{}]/g,
          ''
        ),
      detail: 'Wybierz kraj, aby zobaczyć informacje dodatkowe.',
    });
  }
}
