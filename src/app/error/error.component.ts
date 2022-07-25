import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  title: string = 'ページが見つかりません';
  errImgSrc: string = 'assets/images/error.png';

  ngOnInit(): void {}
}
