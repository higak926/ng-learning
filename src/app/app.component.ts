import { Component, HostListener, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  sequence,
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadein-bottom', [
      transition('void => *', [
        sequence([
          // アニメーション１：初期表示位置は不可視化しておく
          query(
            'div',
            style({
              opacity: 0, // 不可視化
              'margin-bottom': '-20px',
            })
          ),

          // アニメーション２：スタート開始時間調整(ここでは1秒後に開始)
          query('div', animate('500ms', style({}))),

          // アニメーション３：2秒かけて左から可視化される
          query(
            'div',
            animate(
              '1000ms ease-out',
              style({
                opacity: 1,
                'margin-bottom': '0px',
              })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(public loadingService: LoadingService, public router: Router) {}
  public isLoading: boolean = false;
  public topUrl: boolean = false;
  public isTutorial: boolean = false;

  ngOnInit(): void {
    // Topページ判定用
    this.topUrl = location.href.includes('/top');
    // ローディングは最初に購読しておく
    this.loadingService.isLoadingSbj.subscribe(() => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.topUrl = location.href.includes('/top');
      }, 1000);
    });
    // チュートリアル判定も最初に購読しておく
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isTutorial = location.href.includes('/tutorial/');
      }
    });
  }

  @HostListener('window:popstate')
  onPopState() {
    this.loadingService.isLoadingSbj.next();
  }
}
