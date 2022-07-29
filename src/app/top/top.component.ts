import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(public router: Router, public loadingService: LoadingService) {}
  angLogoImgSrc: string = 'assets/images/angular_logo.png';
  learnBuiltEnvPath: string = 'learn/built-env';

  ngOnInit(): void {}

  toLearnBuiltEnv(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.learnBuiltEnvPath]);
  }
}
