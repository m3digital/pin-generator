import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number-display',
  templateUrl: './random-number-display.component.html',
  styleUrls: ['./random-number-display.component.scss'],
})
export class RandomNumberDisplayComponent implements OnInit {
  randomNumber() {
    var number = Math.floor(Math.random() * 10);
    return number;
  }

  constructor() {}

  ngOnInit(): void {}
}
