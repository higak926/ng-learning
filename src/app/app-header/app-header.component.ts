import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(public router: Router, public loadingService: LoadingService) {}
  imgSrc: string = 'assets/images/ng-learning.png';
  topPath: string = '/top';

  toTop(): void {
    if (this.router.url !== this.topPath) {
      this.loadingService.isLoadingSbj.next();
      this.router.navigate([this.topPath]);
    }
  }
}
