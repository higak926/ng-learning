import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-built-environment',
  templateUrl: './built-environment.component.html',
  styleUrls: ['./built-environment.component.scss'],
})
export class BuiltEnvironmentComponent implements OnInit {
  constructor(public router: Router, public loadingService: LoadingService) {}
  learnBeforeTutorial: string = 'learn/before-tutorial';

  ngOnInit(): void {}

  /**
   * 次へ チュートリアルの前に
   */
  toNext(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.learnBeforeTutorial]);
  }
}
