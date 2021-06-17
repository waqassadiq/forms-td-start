import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupFrom: NgForm;

  defaultQuestion = 'pet';
  answer: String = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted =  false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // following is not the best approach
    /*
    this.signupFrom.setValue({
      userData:{
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
      });
      */

      this.signupFrom.form.patchValue({
        userData:{
          username: suggestedName
        }
      });
  }

  /**
  onSubmit(form: NgForm){
    console.log(form);
  }
   */

  onSubmit(){
    this.submitted = true;
    console.log(this.signupFrom);
    this.user.username = this.signupFrom.value.userData.username;
    this.user.email = this.signupFrom.value.userData.email;
    this.user.secretQuestion = this.signupFrom.value.secret;
    this.user.answer = this.signupFrom.value.questionAnswer;
    this.user.gender = this.signupFrom.value.gender;

    this.signupFrom.reset;
  }
}
