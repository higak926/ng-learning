import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-project',
  templateUrl: './init-project.component.html',
  styleUrls: ['./init-project.component.scss'],
})
export class InitProjectComponent implements OnInit {
  constructor() {}

  selectInitConfigImg: string =
    'assets/images/tutorial/init_project/select_init_config.png';
  createdProjectImg: string =
    'assets/images/tutorial/init_project/created_project.png';
  initServeImg: string = 'assets/images/tutorial/init_project/init_serve.png';
  angularWelcomImg: string =
    'assets/images/tutorial/init_project/angular_welcom.png';
  changeComponentImg: string =
    'assets/images/tutorial/init_project/change_component.png';
  changeHtmlImg: string = 'assets/images/tutorial/init_project/change_html.png';
  babyInitImg: string = 'assets/images/tutorial/init_project/baby_init.png';

  ngOnInit(): void {}
}
