import { Component, OnInit, NgModule } from '@angular/core';
export interface Card {
  id: number;
  title: string;
  body: string;
  imgSrc: string;
  imgAlt: string;
  cta1: string;
  cta1Href: string;
  cta1Alt: string;
  cta2: string;
  cta2Href: string;
  cta2Alt: string;
}
export interface IGame {
  gameId: number;
  gameName: string;
  gameCode: string;
  releaseDate: string;
  price: number;
  description: string;
  thumbRating: number;
  imageUrl: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pin-generator';

  locationReload() {
    this.ngOnInit();
  }

  card: Card = {
    id: 1,
    title: "Cyberpunk 2077 - 2020's Game of the Year?",
    body:
      "Cyberpunk 2077 gave fans worldwide the chance to compete in Night City and become a living legend. Stunning, next-gen graphics comhined with years of development make this 2020's viewer's choice game of the year",
    imgSrc:
      './assets/Cyberpunk-2077-NVIDIA-GeForce-RTX-Official-PC-Benchmarks.png',
    imgAlt: 'Cyberpunk 2077',
    cta1: 'Learn More',
    cta1Href: '#',
    cta1Alt: 'learn more about this',
    cta2: 'Buy Now',
    cta2Href: '#',
    cta2Alt: 'go to blank',
  };

  constructor() {}

  ngOnInit() {}
}
