import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-tutorial',
  templateUrl: './before-tutorial.component.html',
  styleUrls: ['./before-tutorial.component.scss'],
})
export class BeforeTutorialComponent implements OnInit {
  tutorialImgSrc: string = 'assets/images/tutorial_image.png';
  codeComponentEx: string = `
  import { Component } from '@angular/core';

  @Component ({
    // <hello-world-bindings></hello-world-bindings>
    // ↓ この名前に対して ↑ こんな感じで他コンポーネントに埋め込めるよ！
    selector: 'hello-world-bindings',
    templateUrl: './hello-world-bindings.component.html'
    // ↑ テンプレートの指定
  })
  export class HelloWorldBindingsComponent {
    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello, World';

    sayMessage() {
      alert(this.message);
    }
  }
  `;

  codeTemplateEx: string = `
  <button
    type="button"
    [disabled]="canClick" // → disabledプロパティのバインド
    (click)="sayMessage()"> // → clickイベントのバインド
    Trigger alert message
  </button>
  <p
    [id]="sayHelloId" → idプロパティのバインド
    [style.color]="fontColor"> → style.colorプロパティのバインド
    You can set my color in the component!
  </p>
  <p>My color is {{ fontColor }}</p>
  // ↑ コンポーネント(tsファイル)で定義した'blue'を表示
  `;

  codeDiEx: string = `
  constructor(public helloService: HelloService) {}
  // ↑ serviceなどをconstructorでDIすることが多々あり
  `;

  codeCliEx: string = `
  ng serve
   → Angular サーバーを起動
   （ソースに変更があれば再ビルド）

  ng generate ***
   → コンポーネントやモジュールを自動作成
   (importも自動で調整してくれたりします)
  `;

  constructor() {}

  ngOnInit(): void {}
}
