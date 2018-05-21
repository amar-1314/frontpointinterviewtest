import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../service/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]

})
export class UserListComponent implements OnInit {
  userListArray: any[];

  constructor(private userService: UserService, private toastr: ToastrService) {
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
    this.toastr.error('User deleted');
  }

  updateUser(user: User) {
    this.userService.enteredUser = user;
    this.userService.updateUser(user);
  }
}
