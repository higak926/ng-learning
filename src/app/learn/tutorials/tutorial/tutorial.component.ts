import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  tutorialImgSrc: string = 'assets/images/tutorial_image.png';

  constructor() {}

  ngOnInit(): void {}
}
