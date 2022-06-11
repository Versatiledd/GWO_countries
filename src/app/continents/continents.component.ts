import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss'],
})
export class ContinentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  continents = [
    {
      continent: 'Afryka',
      pathImage: `assets/images/afryka.jpg`,
      pathURL: 'africa',
    },
    {
      continent: 'Ameryka',
      pathImage: `assets/images/ameryka.jpg`,
      pathURL: 'americas',
    },
    {
      continent: 'Azja',
      pathImage: `assets/images/azja.jpg`,
      pathURL: 'asia',
    },
    {
      continent: 'Europa',
      pathImage: `assets/images/europa.jpg`,
      pathURL: 'europe',
    },
    {
      continent: 'Oceania',
      pathImage: `assets/images/australia.png`,
      pathURL: 'oceania',
    },
  ];
}
