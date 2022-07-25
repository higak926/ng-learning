import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor() {}
  angLogoImgSrc: string = 'assets/images/angular_logo.png';

  ngOnInit(): void {}
}
