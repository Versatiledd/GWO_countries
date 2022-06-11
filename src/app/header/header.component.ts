import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuItem } from 'primeng/api';

import { BehaviorSubject, filter } from 'rxjs';

import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  items: MenuItem[] = [];

  showBackButton = new BehaviorSubject(false);

  backToMainApp() {
    this.showBackButton.next(false);
  }

  backToPreviousPage() {
    this.location.back();
  }

  ngOnInit() {
    // I - prostsze rozwiązanie kiedy mamy app header pobrany do różnych komponentów
    if (this.router.routerState.snapshot.url == '/') {
      this.showBackButton.next(false);
    } else this.showBackButton.next(true);

    // II - dobre rozwiązanie jeśli header jest wyłącznie w app.component

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: any) => {
    //     console.log(event['url']);
    //     if (event['url'] == '/') {
    //       this.showBackButton.next(false);
    //     } else {
    //       this.showBackButton.next(true);
    //     }
    //   });
  }
}
