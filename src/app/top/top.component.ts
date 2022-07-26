import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(public router: Router) {}
  angLogoImgSrc: string = 'assets/images/angular_logo.png';
  learnBuiltEnvPath: string = 'learn/built-env';

  ngOnInit(): void {}

  toLearnBuiltEnv(): void {
    this.router.navigate([this.learnBuiltEnvPath]);
  }
}
