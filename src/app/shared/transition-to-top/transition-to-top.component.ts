import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'transition-to-top',
  templateUrl: './transition-to-top.component.html',
  styleUrls: ['./transition-to-top.component.scss'],
})
export class TransitionToTopComponent implements OnInit {
  constructor(public router: Router, public loadingService: LoadingService) {}
  readonly topPath: string = '/top';

  ngOnInit(): void {}

  toTop(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.topPath]);
  }
}
