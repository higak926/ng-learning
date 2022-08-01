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
  learnBeforeTutorial: string = 'learn/before-tutorial';
  learnTutorial: string = 'learn/tutorial';

  ngOnInit(): void {}

  /**
   * 環境構築へ遷移
   */
  toLearnBuiltEnv(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.learnBuiltEnvPath]);
  }

  /**
   * 環境構築へ遷移
   */
  toLearnBeforeTutorial(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.learnBeforeTutorial]);
  }

  /**
   * 環境構築へ遷移
   */
  toLearnTutorial(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.learnTutorial]);
  }
}
