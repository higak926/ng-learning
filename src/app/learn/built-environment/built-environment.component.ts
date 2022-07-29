import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-built-environment',
  templateUrl: './built-environment.component.html',
  styleUrls: ['./built-environment.component.scss'],
})
export class BuiltEnvironmentComponent implements OnInit {
  readonly topPath: string = '/top';

  constructor(public router: Router) {}

  ngOnInit(): void {}

  toTop(): void {
    this.router.navigate([this.topPath]);
  }
}
