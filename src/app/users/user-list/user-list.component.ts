import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]

})
export class UserListComponent implements OnInit {
  userListArray: any[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getData().snapshotChanges().subscribe(item => {
      this.userListArray = [];
      item.forEach(user => {
        const x = user.payload.toJSON();
        x['$key'] = user.key;
        this.userListArray.push(x);
      });
    });
  }

  deleteUser($key: string) {
    this.userService.deleteUser($key);
  }

  updateUser($key: string, user: NgForm) {
    this.userService.updateUser($key, user.value);
  }
}
