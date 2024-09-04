import { Component } from '@angular/core';
import { DUMMY_USERS} from '../dummy.users';

const random_Index = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
selectedUser = DUMMY_USERS[random_Index];

// getter property use to fetch the data
get imagePath(){
  return 'assets/users/' + this.selectedUser.avatar;
}

//Event listener
onSelectUser() {
  console.log('Clicked!')
  const random_Index = Math.floor(Math.random() * DUMMY_USERS.length)
  this.selectedUser = DUMMY_USERS[random_Index]
}
}
