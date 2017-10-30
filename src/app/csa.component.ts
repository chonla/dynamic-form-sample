import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'csa-app',
  template: `
    <div>
      <h2>Customer Service Application</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
    <a routerLink="/atopup1">Heroes</a>
    <router-outlet></router-outlet>
  `,
  providers:  [QuestionService]
})
export class CsaComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
