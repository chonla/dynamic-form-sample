import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { LabelQuestion }  from './question-label';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new LabelQuestion({
        key: 'header',
        label: 'เสนอ SIM Card ระบบเติมเงิน เบอร์มงคล/เบอร์ 4 ตัวท้ายตรง (โครงการโทาหากันฟรี)',
        order: 0
      }),

      new LabelQuestion({
        key: 'section1',
        label: 'Request Details',
        order: 1
      }),

      new TextboxQuestion({
        key: 'text1',
        label: 'เรื่องที่ขอดำเนินการ',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'text2',
        label: 'หัวข้อที่ขอดำเนินการ',
        class: 'xx',
        value: '',
        required: true,
        order: 2
      }),

      new DropdownQuestion({
        key: 'dropdown1',
        label: 'ช่องทางการเปิดใช้งาน',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getQuestionsWithData(data: any) {
    var questions = this.getQuestions()
    questions.map(question => {
      question.value = data[question.key];
    })
    return questions;
  }
}
