import { Component, OnInit }       from '@angular/core';
import { QuestionService } from './question.service';
import { HttpClient } from '@angular/common/http';

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
export class ViewFormComponent implements OnInit {
  questions: any[];
  data: FormData;

  ngOnInit() {
    this.getData().then((data)=>{
        this.questions = this.service.getQuestionsWithData(data);
        // this.setData(data);
        console.log(this.questions);

    })
  }

  setValue(key: string) {
      console.log(this.questions,key)
    //   this.questions.filter((element)=> {
    //       return element.key == key
    //   })[0].value = this.data.data[key];
  }

  getData(): Promise<FormData> {
    return this.http.get('http://localhost:8888/1.json')
               .toPromise()
               .then(response => response as FormData)
  }

  setData(data: any) {
    this.questions.map(question => {
        question.value = data[question.key];
    })
  }

  constructor(service: QuestionService, private http: HttpClient) {
    //   this.questions = service.getQuestions();
    //   console.log(this.questions);
    //   this.setData({
    //     "header":"","section1":"","text1":"Title","text2":"Sub Title","emailAddress":"e@mail.com","dropdown1":"good"
    //   });
      this.getData().then((data)=>{
        this.questions = service.getQuestionsWithData(data);
        // this.setData(data);
        console.log(this.questions);

    })
  }
}

export class FormData {
    data: any;

    constructor(data:any) {
        this.data = data;
    }
}