import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-built-environment',
  templateUrl: './built-environment.component.html',
  styleUrls: ['./built-environment.component.scss'],
})
export class BuiltEnvironmentComponent implements OnInit {
  readonly topPath: string = '/top';

  constructor(public router: Router, public loadingService: LoadingService) {}

  ngOnInit(): void {}

  toTop(): void {
    this.loadingService.isLoadingSbj.next();
    this.router.navigate([this.topPath]);
  }
}
