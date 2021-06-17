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
    console.log(this.signupFrom);
  }
}
