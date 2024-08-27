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
}
