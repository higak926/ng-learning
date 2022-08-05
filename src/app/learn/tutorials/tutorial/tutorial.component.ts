import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  tutorialImgSrc: string = 'assets/images/tutorial_image.png';
  toInitProjectPath: string = 'learn/tutorial/init-project';

  constructor(public router: Router, public loadingService: LoadingService) {}

  ngOnInit(): void {}

  public toInitProject(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.toInitProjectPath]);
  }
}
