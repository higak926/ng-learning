import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'transition-to-tutorial-top',
  templateUrl: './transition-to-tutorial-top.component.html',
  styleUrls: ['./transition-to-tutorial-top.component.scss'],
})
export class TransitionToTutorialTopComponent implements OnInit {
  constructor(public loadingService: LoadingService, public router: Router) {}
  readonly toTutorialTopPath: string = 'learn/tutorial';

  ngOnInit(): void {}

  public toTutorialTop(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.toTutorialTopPath]);
  }
}
