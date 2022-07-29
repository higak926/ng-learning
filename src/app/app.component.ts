import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.loadingService.isLoadingSbj.subscribe(() => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
