import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'view-form',
  template: `
    <div>
      <h2>Customer Service Application 2345678</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class ViewFormComponent {
  questions: any[];
  data: FormData;

  setValue(key: string) {
      this.questions.filter((element)=> {
          return element.key == key
      })[0].value = this.data.data[key];
  }

  constructor(service: QuestionService) {
      this.questions = service.getQuestions();
      this.data = new FormData();
      this.questions[0].value = this.data.data.header;
      
      Object.keys(this.data.data).map((key) => {
        this.setValue(key);
      })
  }
}

export class FormData {
    data: any;

    constructor() {
        this.data = {
            "header":"","section1":"","text1":"Title","text2":"Sub Title","emailAddress":"e@mail.com","dropdown1":"good"
        };
    }
}