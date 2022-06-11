export interface Country {
  name: {
    official: string;
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}
[];

export interface DetailedInfoAboutCountry {
  currencies: string;
  area: number;
  languages: {
    [key: string]: {};
  };
}
[];
