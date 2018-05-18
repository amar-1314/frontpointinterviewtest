import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) {
  }


  ngOnInit() {
    this.userService.getData();
    this.resetUserForm();
  }

  onSubmit(userForm: NgForm) {
    this.userService.insertUser(userForm.value);
    this.resetUserForm();
  }

  private resetUserForm(userForm?: NgForm) {
    if (userForm != null) {
      userForm.reset();
    }

    this.userService.enteredUser = {
      $key: null,
      firstName: '',
      lastName: '',
      office: ''
    };

  }
}
