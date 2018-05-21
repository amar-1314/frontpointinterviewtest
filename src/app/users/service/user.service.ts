import {Injectable} from '@angular/core';
import {User} from './user.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<User>;
  enteredUser: User = new User();

  constructor(private firebase: AngularFireDatabase) {
  }

  getData() {
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User) {
    this.userList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      office: user.office
    });


  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

  updateUser(user: User) {
    this.userList.update(user.$key, {
      firstName: user.firstName,
      lastName: user.lastName,
      office: user.office
    });

  }
}
